import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { searchWord } from '../api/oxford';
import { addWord } from '../api/firebase';
import { fetchWords } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import Definition from '../components/Definition';
import CardList from '../components/CardList';

class Home extends Component {
    state = { word: '', words: '', definition: '', saved: false }

    async componentDidMount() {
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
                        { this.state.definition ? 
                            <View style={styles.modalContainer}>
                                <Definition definition={this.state.definition} addWord={addWord} saved={this.state.saved}/>
                            </View> : null}
                        { this.state.definition ? null : <CardList navigation={this.props.navigation} words={this.state.words}/>}    
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
})