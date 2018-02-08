import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

const screens = [
    {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Notebook',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
     {
        name: 'Flashcard',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
     },
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
    state = {  }
    //link to word def when pressed
    render() {
        console.log(this.props.words)
        return (
            <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
            {
                    this.props.words.map((u, i) => {
                        return (
                            <TouchableOpacity>
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
          </Card>
        );
    }
}

const styles = StyleSheet.create({


  })
  
export default WordList;
