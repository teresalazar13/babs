import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Header from './common/Header';
import Item from './common/Item';
import ItemReceived from './common/ItemReceived';
import ItemRequested from './common/ItemRequested';
import Navbar from './common/Navbar';

class Home extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollViewStyle}>
          <View style={styles.listContainer}>
            <ItemReceived />
            <ItemRequested />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </View>
        </ScrollView>
        <Navbar
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },

  scrollViewStyle: {
    flex: 1,
  },

  listContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 25
  },
});

export default Home;
