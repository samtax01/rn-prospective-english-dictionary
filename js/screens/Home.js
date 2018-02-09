import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { searchWord } from '../api/oxford';
import { addWord } from '../api/firebase';

import SearchBox from '../components/SearchBox';
import Definition from '../components/Definition';
import CardList from '../components/CardList';

class Home extends Component {
    state = { word: 'word', definition: '' }
    onSearchWord = async (word) => {
        const data = await searchWord(word)
        const definition = data[0]
        this.setState({word, definition})
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../res/home2.jpg')}>  
            
                <SearchBox search={this.onSearchWord}/>
                {/* <Button onPress={() => this.props.navigation.navigate('Notebook')}>Notebook</Button> */}
                <View style={styles.modalContainer}>
                    <Definition definition={this.state.definition} addWord={addWord}/>
                </View> 
                { this.state.definition ? null : <CardList navigation={this.props.navigation}/>}
                </ImageBackground>
                
            </View>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: '#fff',
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