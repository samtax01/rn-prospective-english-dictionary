import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
            <View>
                <Text h1>{id} <Text h4>[{phonetic}]</Text></Text>
                <Icon
                    type='font-awesome'
                    onPress={()=>{this.props.addWord(this.props.definition)}}
                    name='heart' />
                <Text >{categories}</Text>
                {/* {this.renderSenses(senses[0])} */}
                {/* {this.renderSenses(senses.subsenses)} */}
                <Text h4>{senses[0].definitions[0]} :</Text>
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
        margin: 20
    }
})

export default Definition;