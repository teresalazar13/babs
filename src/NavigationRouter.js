import { StackNavigator } from 'react-navigation';
import Start from './components/Start';
import Authentication from './components/Authentication';

export const Router = StackNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      header: false
    }
  },

  Start: {
    screen: Start,
    navigationOptions: {
      header: false
    }
  },
});
