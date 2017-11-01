import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>babs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5a826',
  },

  title: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
