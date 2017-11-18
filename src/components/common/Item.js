import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Item extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5 }}>
          <View style={{ flexDirection:'column' }}>
            <Text style={styles.title}>NUGGETS</Text>
            <Text style={styles.subtitle}>Rua Miguel Torga, n 150</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.price}>7€</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    alignSelf: 'stretch',
    marginTop: 25,
    padding: 10,
    borderRadius: 5,
  },

  title: {
    color: 'black',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 12
  },

  subtitle: {
    color: '#b3b2b3',
    fontFamily: 'arial',
    fontWeight: 'bold',
    paddingTop: 8,
    fontSize: 10
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    backgroundColor: '#f5a826',
    alignItems: 'center',
    justifyContent: 'center'
  },

  price: {
    color: 'white',
    fontFamily: 'arial',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 12
  }
});


export default Item;
