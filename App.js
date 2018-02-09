import React from 'react';
// import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator} from 'react-navigation';

import Splash from './js/screens/Splash';
import Home from './js/screens/Home';
import Notebook from './js/screens/Notebook';
import Flashcard from './js/screens/Flashcard';
import User from './js/screens/User';

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Notebook: {
      screen: Notebook,
    },
    Flashcard: {
      screen: Flashcard,
    },
    User: {
      screen: User,
    }, 
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'modal'
  }
);

