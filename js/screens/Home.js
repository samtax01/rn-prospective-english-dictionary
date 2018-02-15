import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { searchWord } from '../api/oxford';
import { addWord } from '../api/firebase';
import { fetchWords } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import Definition from '../components/Definition';
import CardList from '../components/CardList';
import Navigator from '../components/Navigator';

class Home extends Component {
    state = { word: '', words: '', definition: '', saved: false }

     componentDidMount() {
         this.onFetch()
    }
    onFetch = async () => {
        const words = await fetchWords()
        this.setState({
            words: words
        })
    }
    onSearchWord = async (word) => {
        const data = await searchWord(word)
        const definition = data[0]
        const saved = false
        this.setState({word, definition, saved})
    }
    onClear = () => {
        this.setState({definition: ''})
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
                        <SearchBox search={this.onSearchWord} onClear={this.onClear}/>
                        { this.state.definition ? 
                            <View style={styles.modalContainer}>
                                <Definition definition={this.state.definition} addWord={addWord} saved={this.state.saved} onFetch={this.onFetch}/>
                            </View> : null}
                        { this.state.definition ? null : <ScrollView><CardList navigation={this.props.navigation} words={this.state.words}/></ScrollView>}    
                        { this.state.definition ? null : 
                        <View style={styles.tabContainer}>
                            <Navigator navigation={this.props.navigation} words={this.state.words} current='Home'/>
                        </View>}
                    </View>

                </ImageBackground>
                
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        marginTop: 20,
    },
    background: {
        width: '100%',
        height: '100%',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    tabContainer: {
        flex: 1,
        paddingBottom: 15
    }
})