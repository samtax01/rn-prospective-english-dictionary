import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

const screens = [
    {
        name: 'Notebook',
        image: require('../../res/notebook.jpg')
     },
     {
        name: 'Flashcard',
        image: require('../../res/card.jpg')
     },
   ]
   
class CardList extends Component {
    state = {  }

    render() {
        return (
            <View containerStyle={{ height: 600, borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
            {
              screens.map((u, i) => {
                return (
                  <TouchableOpacity key={u.name} onPress={() => {this.props.navigation.navigate(u.name, {words: this.props.words})}}>
                  <Card
                    containerStyle={{height: 201, marginBottom: 50, borderRadius: 5, backgroundColor: 'white'}} 
                    title={u.name}
                    image={u.image}
                  />
                  </TouchableOpacity>
                );
              })
            }
          </View>
        );
    }
}

const styles = StyleSheet.create({


  })
  
export default CardList;
