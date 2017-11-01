import { StackNavigator } from 'react-navigation';
import Start from './components/Start';

export const Router = StackNavigator({
  Start: {
    screen: Start,
    navigationOptions: {
      header: false
    }
  },
});
