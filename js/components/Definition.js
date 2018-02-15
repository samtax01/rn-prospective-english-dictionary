import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, Button, ScrollView } from 'react-native';
import { Text, Icon } from 'react-native-elements';

class Definition extends Component {
    state = { saved: this.props.saved }
    componentWillMount() {
        this.opacity = new Animated.Value(0);
      }
    componentDidMount() {
        Animated.timing(this.opacity, {
            toValue: 1,
            duration: 400,
            easing: Easing.ease,
          }).start();        
    }
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
    onAddWord= () => {
        this.props.addWord(this.props.definition)
        if(this.props.onFetch){this.props.onFetch()}
        this.setState({saved: !this.state.saved})
    }
    renderDefinition = () => {
        id = this.props.definition.id;
        entries = this.props.definition.lexicalEntries; //loop through

        return (
            <ScrollView style={styles.innerContainer}>
                {this.props.closeModal ? 
                <Icon
                    type='font-awesome'
                    iconStyle={{alignSelf: 'flex-end'}}
                    onPress={this.props.closeModal}
                    name='close' /> : null }
                <View style={styles.header}>
                    <Text h1>{id}</Text>
                {this.state.saved ?
                    <Icon
                        type='font-awesome'
                        iconStyle={{}}
                        onPress={this.onAddWord}
                        color= '#E91E63'
                        name='heart' /> :
                    <Icon
                        type='font-awesome'
                        iconStyle={{}}
                        onPress={this.onAddWord}
                        color= '#E91E63'
                        name='heart-o' />}
                </View>
                {this.renderEntries(entries)}
            </ScrollView>
        )
    }
    render() {
        return (
        <Animated.View style={{opacity: this.opacity}}>
            <View style={styles.container}>
                { this.props.definition ? this.renderDefinition() : null}
            </View>
        </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 320,
        height: 560,
        marginTop: 5,
        backgroundColor: 'white',
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