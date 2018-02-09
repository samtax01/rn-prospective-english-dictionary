import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Text, Icon } from 'react-native-elements';

class Definition extends Component {
    state = {  }
    // renderSenses = (sense) => {
    //     return senses.map(sense => {
    //         return (
    //             <View>
    //                 <Text>{sense.definitions[0]}</Text>
    //                 <Text>{sense.examples[0].text}</Text>
    //             </View>
    //         )
    //     })
    // }
    renderDefinition = () => {
        id = this.props.definition.id;
        entry = this.props.definition.lexicalEntries[0]; //loop through
        categories = entry.lexicalCategory;
        pronunciation = entry.pronunciations[0].audioFile;
        phonetic = entry.pronunciations[0].phoneticSpelling;
        senses = entry.entries[0].senses;

        return (
            <View style={styles.container}>
                <Text h1>{id} <Text h4>[{phonetic}]</Text></Text>

                <Icon
                    type='font-awesome'
                    onPress={()=>{this.props.addWord(this.props.definition)}}
                    name='heart' />
                <Icon
                    type='font-awesome'
                    onPress={this.props.closeModal}
                    name='close' />
                <Text >{categories}</Text>
                {/* {this.renderSenses(senses[0])} */}
                {/* {this.renderSenses(senses.subsenses)} */}
                <Text h5>{senses[0].definitions[0]} :</Text>
                <Text>{senses[0].examples[0].text}</Text>
            </View>
        )
    }
    render() {
        return (
        <View>
            { this.props.definition ? this.renderDefinition() : null}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 20,
        width: 300,
        height: 500,
        backgroundColor: 'white'
    },

})

export default Definition;