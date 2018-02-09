import React, { Component } from 'react';
import { View, Text,Button, Modal, StyleSheet } from 'react-native';
import Definition from './Definition';

class WordModal extends Component {
    state = {visible:false}

    openModal() {
        this.setState({visible:true});
      }
    
      closeModal() {
        this.setState({visible:false});
      }
    render() {
        return (
            <View style={styles.container}>
            <Modal
                visible={this.state.visible}
                animationType={'slide'}
                onRequestClose={() => this.closeModal()}
            >
            <Definition/>
            </Modal>
            <Button
                onPress={() => this.openModal()}
                title="Open modal"
            />
          </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'grey',
    },
    innerContainer: {
      alignItems: 'center',
    },
  });
export default WordModal;
