import { StackNavigator } from 'react-navigation';
import Start from './components/Start';
import Authentication from './components/Authentication';

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
});
