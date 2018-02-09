import React, { Component } from 'react';
import { View, Button, Text, Modal, Image,  StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Definition from './Definition';
const screens = [
    {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },

   ]
   //get words from parent

class WordList extends Component {
    state = { visible:false, definition: '' }
    //open modal of word def when pressed
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
                <TouchableOpacity onPress={()=>{this.showDef(u.definition)}}>
                    <ListItem
                        containerStyle={{borderRadius: 5, backgroundColor: 'white'}} 
                        key={i}
                        title={u.word}
                        // avatar={{uri:u.avatar}}
                    />       
                </TouchableOpacity>

            );
        })
    }
    render() {
        console.log(this.props.words)
        return (
            <ScrollView style={styles.container}>
                <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
                    {this.props.words && !this.state.visible ? this.renderWords() : null}
                </Card>
                {this.state.visible ? 
                    <View style={styles.modalContainer}>
                        <Definition definition={this.state.definition} closeModal={this.closeModal}/>
                    </View> : null
                }
          </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
  })
  
export default WordList;
