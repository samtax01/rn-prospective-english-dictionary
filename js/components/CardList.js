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
   ]
   
class CardList extends Component {
    state = {  }
    
    render() {
        return (
            <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
            {
              screens.map((u, i) => {
                return (
                  <TouchableOpacity key={u.name} onPress={() => {this.props.navigation.navigate(u.name)}}>
                  <ListItem
                    containerStyle={{height: 150, marginBottom: 50, borderRadius: 5, backgroundColor: 'white'}} 
                    
                    roundAvatar
                    title={u.name}
                    avatar={{uri:u.avatar}}
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
  
export default CardList;
