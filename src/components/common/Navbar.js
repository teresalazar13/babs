import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Navbar extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
        <Text>oi</Text>

        </View>
        <View style={styles.selectedSubContainer}>
        <Text>oi</Text>

        </View>
        <View style={styles.subContainer}>
        <Text>oi</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  subContainer: {
    justifyContent: 'center',
    backgroundColor: '#d9d8d9',
    flex: 1,
  },

  selectedSubContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    backgroundColor: '#b3b2b3',
    flex: 1,
  }
});


export default Navbar;
