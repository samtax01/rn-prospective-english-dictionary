import React, { Component } from 'react';
import { View, Button, Text, Modal, Image,  StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import Definition from './Definition';

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
                <TouchableOpacity key={u.word} onPress={()=>{this.showDef(u.definition)}}>
                    <ListItem
                        containerStyle={{borderRadius: 5, backgroundColor: 'white'}} 
                        
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
            <View style={styles.container}>
                <ScrollView>
                    <Card containerStyle={{borderRadius: 5, borderColor: 'transparent', backgroundColor: 'transparent', }} >
                        {this.props.words && !this.state.visible ? this.renderWords() : null}
                    </Card>
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
