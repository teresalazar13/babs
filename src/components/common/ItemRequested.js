import React, { Component } from 'react';
import { terminateOrder } from '../../actions';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class ItemRequested extends Component<{}> {

  constructor(props) {
    super(props);
  }

  render() {
    const { title, address, price, phone, createdByUsername, endDateDay, endDateTime, token, _id } = this.props;
    const item = { token, _id };

    return (
      <View style={styles.container}>
        <Text style={styles.titleT}>AGUARDA QUE ALGUÉM RESPONDA AO TEU PEDIDO</Text>

        <View style={styles.containerSub}>
          <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5 }}>
            <View style={{ flexDirection:'column' }}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>{address}</Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.price}>{price}€</Text>
            </View>
          </View>

          <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5, marginTop: 10 }}>
            <View style={{ flexDirection:'column' }}>
              <Text style={styles.title}>{createdByUsername}</Text>
              <Text style={styles.subtitle}>{phone}</Text>
            </View>
            <View style={styles.containerTime}>
              <Text style={styles.time}>{endDateTime}</Text>
              <Text style={styles.time}>{endDateDay}</Text>
            </View>
          </View>

          {/*

          <TouchableHighlight
            onPress={() => this.props.terminateOrder(item) }
          >

            <View style={styles.containerBottom}>
              <View style={styles.containerTerminate}>
                <Text style={styles.terminate}>T E R M I N A R</Text>
              </View>
            </View>

          </TouchableHighlight>

          */}

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


export default connect(null, {
  terminateOrder
})(ItemRequested);
