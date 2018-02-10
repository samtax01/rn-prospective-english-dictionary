import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchWords } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import WordList from '../components/WordList';

class Notebook extends Component {
    state = { words: null,  }

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
                    <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    />
                    <View style={styles.innerContainer}>
                        <SearchBox search={this.onSearchWord}/>
                    </View>
                    <WordList words={this.state.words}/>
                    
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
})
export default Notebook;