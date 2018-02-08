import React, { Component } from 'react';
import { View, Text, TouchableOpacity , StyleSheet, ImageBackground } from 'react-native';
class Splash extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.background} source={require('../../res/splash.jpg')}>  
                    
                    <Text style={styles.brand}>
                            Prospective English
                    </Text>
                    <TouchableOpacity 
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.text}>
                            Enter as a visitor
                        </Text>
                    </TouchableOpacity >
                </ImageBackground>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    background: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255, .9)",
        marginTop: 300,
        width: 250,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 30,

    },
    brand: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: '700',
        fontSize: 28
    },
    text: {
        color: 'black',
        // fontWeight: '500',
        fontSize: 18
    }
})
export default Splash;