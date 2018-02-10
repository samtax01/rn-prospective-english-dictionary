import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchWords } from '../api/firebase';
import { searchWord } from '../api/oxford';
import { addWord } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import WordList from '../components/WordList';
import Definition from '../components/Definition';

class Notebook extends Component {
    state = { words: '', visible: false, definition: '' }

    async componentDidMount() {
        const words = await fetchWords()
        this.setState({
            words: words
        })
  
    }
    closeModal = () => {
        this.setState({visible:false});
      }
    showDef = (definition) => {
        this.setState({definition, visible:true})
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
                    <WordList words={this.state.words} showDef={this.showDef} />
                    {this.state.visible ? 
                        <View style={styles.modalContainer}>
                            <Definition definition={this.state.definition} addWord={addWord} closeModal={this.closeModal} saved={true}/>
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
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Notebook;