import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ItemRequested extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleT}>AGUARDA QUE ALGUEM RESPONDA AO TEU PEDIDO</Text>
        <View style={styles.containerSub}>
          <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5 }}>
            <View style={{ flexDirection:'column' }}>
              <Text style={styles.title}>NUGGETS</Text>
              <Text style={styles.subtitle}>Rua Miguel Torga, n 150</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.price}>7€</Text>
            </View>
          </View>
          <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5, marginTop: 10 }}>
            <View style={{ flexDirection:'column' }}>
              <Text style={styles.title}>Alexandre Santos</Text>
              <Text style={styles.subtitle}>914098900</Text>
            </View>
            <View style={styles.containerTime}>
              <Text style={styles.time}>18:30</Text>
            </View>
          </View>
          <View style={styles.containerBottom}>
            <View style={styles.containerTerminate}>
              <Text style={styles.terminate}>T E R M I N A R</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginTop: 25,
  },

  titleT: {
    color: 'black',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 10,
    alignSelf: 'center'
  },

  containerSub: {
    marginTop: 15,
    backgroundColor: '#f9d7a0',
    alignSelf: 'stretch',
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

  containerTime: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
    backgroundColor: '#b3b2b3',
    alignItems: 'center',
    justifyContent: 'center'
  },

  time: {
    color: 'white',
    fontFamily: 'arial',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 12
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
  },

  containerBottom: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerTerminate: {
    marginTop: 15,
    marginBottom: 10,
    width: 150,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ee2d44',
    alignItems: 'center',
    justifyContent: 'center'
  },

  terminate: {
    color: 'white',
    fontFamily: 'arial',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 10
  },
});


export default ItemRequested;
