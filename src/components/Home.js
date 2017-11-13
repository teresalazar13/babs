import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './common/Header';
import Item from './common/Item';

class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.listContainer}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
  },
});

export default Home;
