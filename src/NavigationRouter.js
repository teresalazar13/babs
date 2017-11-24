import { StackNavigator } from 'react-navigation';
import Start from './components/Start';
import Authentication from './components/Authentication';
import Home from './components/Home';
import NewRequest from './components/NewRequest';
import Profile from './components/Profile';


let MyTransition = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([1, 1, 1]),
  });

  return {
    opacity,
    transform: [
      {scaleY}
    ]
  };
};

let TransitionConfiguration = () => {
  return {
    screenInterpolator: (sceneProps) => {
      const {position, scene} = sceneProps;
      const {index} = scene;
      return MyTransition(index, position);
    }
  }
};

export const Router = StackNavigator({
    Start: {
      screen: Start,
      navigationOptions: {
        header: false
      }
    },

    Authentication: {
      screen: Authentication,
      navigationOptions: {
        header: false
      }
    },

    Home: {
      screen: Home,
      navigationOptions: {
        header: false
      }
    },

    NewRequest: {
      screen: NewRequest,
      navigationOptions: {
        header: false
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        header: false
      }
    },

  },{
    transitionConfig: TransitionConfiguration,
    initialRouteName: true ? "Authentication" : "Home"
  }
);
