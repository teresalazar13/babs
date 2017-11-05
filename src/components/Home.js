import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './common/Header';


class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
