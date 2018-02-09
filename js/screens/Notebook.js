import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchWords } from '../api/firebase';
import WordList from '../components/WordList';

class Notebook extends Component {
    state = { words: null }
    async componentDidMount() {
        const words = await fetchWords()
        this.setState({
            words: words
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../res/home2.jpg')}>  
                    {/* <Text>Notebook Page</Text> */}
                        <WordList words={this.state.words}/>
                </ImageBackground>

            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    background: {
        width: '100%',
        height: '100%',
    },
})
export default Notebook;