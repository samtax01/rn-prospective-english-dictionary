import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WordModal from '../components/WordModal';

class Flashcard extends Component {
    state = {  }
    render() {
        return (
            <View>
                <WordModal/>
            </View>            
        );
    }
}

export default Flashcard;