import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';

class SearchBox extends Component {
    //get the search function from parent
    state = { word: '' }
    changeText = (text) => {
        this.setState({
            word: text,
        })
    }
    clearText = () => {
        this.props.onClear();
        this.setState({
            word: '',
        }) 
    }
    render() {
        return (
            <View>
                <SearchBar 
                    containerStyle={{borderBottomWidth: 0,borderTopWidth: 0, backgroundColor: 'transparent', }}
                    inputStyle={{backgroundColor: 'white', }}
                    lightTheme 
                    round
                    clearIcon
                    onClearText={this.clearText}
                    onChangeText={text => this.changeText(text)}
                    onSubmitEditing={() => this.props.search(this.state.word)}
                    icon={{type: 'font-awesome', name: 'search'}}
                    placeholder='search word here...'
                    value={this.state.word}
                    returnKeyType='search'
                    />
            </View>
        );
    }
}

export default SearchBox;