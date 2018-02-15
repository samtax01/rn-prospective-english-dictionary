import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { fetchWords } from '../api/firebase';
import { searchWord } from '../api/oxford';
import { addWord } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import WordList from '../components/WordList';
import Definition from '../components/Definition';
import Navigator from '../components/Navigator';

class Notebook extends Component {
    state = { word: '', words: this.props.navigation.state.params.words, visible: false, definition: '', saved: true }

    closeModal = () => {
        this.setState({visible:false});
      }
    showDef = (definition) => {
        this.setState({definition, visible:true, saved: true})
    }
    onSearchWord = async (word) => {
        const data = await searchWord(word)
        const definition = data[0]
        const saved = false
        const visible = true
        this.setState({word, definition, saved, visible})
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../res/home2.jpg')}>  
                    <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    />
                    <View style={styles.innerContainer}>
                        <SearchBox search={this.onSearchWord}/>
                    </View>
                    <View style={styles.listContainer}>
                        <WordList words={this.state.words} showDef={this.showDef} />
                    </View>

                    <View style={styles.tabContainer}>
                        <Navigator navigation={this.props.navigation} words={this.state.words} current='Notebook'/>
                    </View>
                    {this.state.visible ? 
                        <View style={styles.modalContainer}>
                            <Definition definition={this.state.definition} addWord={addWord} closeModal={this.closeModal} saved={this.state.saved}/>
                        </View> : null
                    }
            </ImageBackground>

            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingTop: 20
    },
    background: {
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    title: {
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 28,
        color: 'white'
    },
    listContainer: {
        flex: 5
    },
    tabContainer: {
        flex: 1,
        paddingBottom: 15
    }
})
export default Notebook;