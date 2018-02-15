import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar, ImageBackground } from 'react-native';
import { DeckSwiper } from 'native-base';
import { addWord } from '../api/firebase';
import SearchBox from '../components/SearchBox';
import Definition from '../components/Definition';
import Navigator from '../components/Navigator';

class Flashcard extends Component {
    state = { word: '', words: this.props.navigation.state.params.words, visible: false, definition: '', saved: true }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../res/home2.jpg')}>  
                    <StatusBar
                    backgroundColor="transparent"
                    barStyle="light-content"
                    />
                    {/* <View style={styles.innerContainer}>
                        <SearchBox search={this.onSearchWord}/>
                    </View> */}
                    <View style={styles.deckContainer}>
                        <DeckSwiper
                            dataSource={this.state.words}
                            renderItem={item =>
                            <View style={styles.modalContainer}>
                                <Definition definition={item.definition} addWord={addWord} saved={this.state.saved}/>
                            </View>
                            }
                        />
                    </View>


                    {/* <View style={styles.tabContainer}>
                        <Navigator navigation={this.props.navigation} current='Notebook'/>
                    </View> */}

            </ImageBackground>

            </View>                
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    deckContainer: {
        marginTop: 30,
    },
    tabContainer: {
        flex: 1,
        paddingBottom: 15
    }
})
export default Flashcard;