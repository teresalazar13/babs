import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component<{}> {

  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>babs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5a826',
    paddingBottom: 10
  },

  title: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingTop: 30,
  },
});


export default Header;
