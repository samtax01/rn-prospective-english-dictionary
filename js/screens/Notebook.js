import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { fetchWords } from '../api/firebase';
import WordList from '../components/WordList';

class Notebook extends Component {
    state = { words: [] }
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
                    <ScrollView>
                        { this.state.words ? <Text>no</Text> :
                        <WordList words={this.state.words}/>
                        }
                        </ScrollView>
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