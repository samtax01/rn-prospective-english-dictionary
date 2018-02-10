import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { StackNavigator, TabNavigator} from 'react-navigation';
import { AppLoading, Asset, Font } from 'expo';
import Splash from './js/screens/Splash';
import Home from './js/screens/Home';
import Notebook from './js/screens/Notebook';
import Flashcard from './js/screens/Flashcard';
import User from './js/screens/User';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <RootStack />
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./res/home2.jpg'),
        require('./res/splash.jpg'),
      ]),
      // Font.loadAsync({
      //   // This is the font that we are using for our tab bar
      //   ...Ionicons.font,
      //   // We include SpaceMono because we use it in HomeScreen.js. Feel free
      //   // to remove this if you are not using it in your app
      //   'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      // }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
//   render() {
//     return (
//       <RootStack/>
//     );
//   }
// }


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
    // initialRouteName: 'Notebook',
    headerMode: 'modal'
  }
);

