import React from 'react';
// import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator} from 'react-navigation';

import Splash from './js/screens/Splash';
import Home from './js/screens/Home';
import Notebook from './js/screens/Notebook';
import Flashcard from './js/screens/Flashcard';
import User from './js/screens/User';

//test
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

// const Tabs = TabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     },
//   },
//   Favorite: {
//     screen: Favorite,
//     navigationOptions: {
//       tabBarLabel: 'Favorite',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
//     },
//   },  
// });

