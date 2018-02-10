import React, { Component } from 'react';
import { View, Button, Text,  Modal, Image,  Animated, Easing, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

class WordList extends Component {
    state = {  opacity:new Animated.Value(0)  }
    //open modal of word def when pressed
    componentWillMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
          }).start(); 
      }

    renderWords = () => {
        return this.props.words.map((u, i) => {
            return (
                <TouchableOpacity key={u.word} onPress={()=>{this.props.showDef(u.definition)}}>
                    <ListItem
                        containerStyle={{borderRadius: 5, backgroundColor: 'white'}} 
                        title={u.word}
                    />       
                </TouchableOpacity>

            );
        })
    }
    render() {
        let { opacity } = this.state

        return (
             <View style={styles.container}>
                <ScrollView>
                    <Animated.View style={{opacity: opacity}}>
                        <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', marginTop: -15}} >
                          {this.props.words? this.renderWords() : null}
                        </Card>
                    </Animated.View>
                </ScrollView>

             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15
    },

  })
  
export default WordList;
