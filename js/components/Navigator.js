import React, { Component } from 'react'
import { View,StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class Navigator extends Component {
    //take current screen as props from parent
    onNav = (screen) => {
        if (this.props.current !== screen) {
            this.props.navigation.navigate(screen, {words: this.props.words})
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Icon
                    raised
                    type='MaterialCommunityIcons'
                    size='32'
                    iconStyle={{fontSize: 38}}
                    color= '#EF5350'
                    name='home'
                    onPress={() => {this.onNav('Home')}}
                     />
                <Icon
                    raised
                    size='32'
                    type='MaterialCommunityIcons'
                    iconStyle={{}}
                    color= '#EF5350'
                    name='book'
                    onPress={() => {this.onNav('Notebook')}}
                     />
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Navigator;