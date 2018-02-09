import React, { Component } from 'react';
import { View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
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
    openModal() {
        this.setState({visible:true});
      }
    
      closeModal() {
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
            <View>
                <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
                    {this.props.words ? this.renderWords() : null}
                </Card>
                <Modal
                    visible={this.state.visible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                >
                <Definition definition={this.state.definition}/>
                </Modal>
          </View>

        );
    }
}

const styles = StyleSheet.create({


  })
  
export default WordList;
