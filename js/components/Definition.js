import React, { Component } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import { Text, Icon } from 'react-native-elements';

class Definition extends Component {
    state = {  }
    componentDidCatch(error, info) {
        // Display fallback UI
        // this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
      }

    renderSenses = (senses) => {
        return senses.map(sense => {
            try {
                definition = sense.definitions[0]
                example = sense.examples[0].text
              } catch (error) {
              }
            return (
                <View>
                    <Text h5><Text style={styles.category}>Def. </Text>- {definition}</Text>
                    <Text><Text style={styles.category}>E.g. </Text>{example}</Text>
                </View>
            )
        })
    }
    renderEntries = (entries) => {
        //map lexicalEntries-all entries, render etymology, senses, pronunciation
        return entries.map(entry => {
            categories = entry.lexicalCategory;
            pronunciation = entry.pronunciations[0].audioFile;
            phonetic = entry.pronunciations[0].phoneticSpelling;
            senses = entry.entries[0].senses;

            return (
                <View style={styles.definition}>
                    <Text style={styles.category}>{categories} <Text style={styles.phonetic}>[{phonetic}]</Text></Text>
                    {this.renderSenses(senses)} 
                    {/* {this.renderSenses(senses.subsenses)}  */}
                </View>
            )
        })
    }

    renderDefinition = () => {
        id = this.props.definition.id;
        entries = this.props.definition.lexicalEntries; //loop through

        return (
            <ScrollView style={styles.innerContainer}>
                <Icon
                    type='font-awesome'
                    iconStyle={{alignSelf: 'flex-end'}}
                    onPress={this.props.closeModal}
                    name='close' />
                <View style={styles.header}>
                    <Text h1>{id}</Text>
                    <Icon
                        type='font-awesome'
                        iconStyle={{}}
                        onPress={()=>{this.props.addWord(this.props.definition)}}
                        color= '#E91E63'
                        name='heart' />
                </View>
                {this.renderEntries(entries)}
            </ScrollView>
        )
    }
    render() {
        return (
        <View style={styles.container}>
            { this.props.definition ? this.renderDefinition() : null}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 300,
        height: 500,
        backgroundColor: 'white'
    },
    innerContainer: {
        padding: 20,
        paddingBottom: 80
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    phonetic: {
        fontStyle: 'italic',
        fontSize: 18,
        marginRight: 80,
    },
    category: {
        fontStyle: 'italic',
        color: 'grey'
    },
    definition: {
        marginBottom: 20
    }

})

export default Definition;