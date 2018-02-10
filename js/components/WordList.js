import React, { Component } from 'react';
import { View, Button, Text,  Modal, Image,  Animated, Easing, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Definition from './Definition';

class WordList extends Component {
    state = { visible:false, definition: '', opacity:new Animated.Value(0)  }
    //open modal of word def when pressed
    componentWillMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            easing: Easing.ease,
          }).start(); 
      }
    openModal = () => {
        this.setState({visible:true});
      }
    
      closeModal = () => {
        this.setState({visible:false});
      }
    showDef(definition) {
        this.setState({definition, visible:true})
    }
    renderWords = () => {
        return this.props.words.map((u, i) => {
            return (
                <TouchableOpacity key={u.word} onPress={()=>{this.showDef(u.definition)}}>
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
                        <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
                          {this.props.words? this.renderWords() : null}
                        </Card>
                    </Animated.View>
                </ScrollView>
                {this.state.visible ? 
                    <View style={styles.modalContainer}>
                        <Definition definition={this.state.definition} closeModal={this.closeModal}/>
                    </View> : null
                }
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
  })
  
export default WordList;
