import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Item extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { hide: true };
  }

  renderRespond() {
    const { respondHide, respond } = styles;

    if (this.state.hide == true) {
      return respondHide;
    }
    return {};
  }

  render() {
    const { title, address, price, phone, createdByUsername, endDateDay, endDateTime } = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.setState({ hide: !this.state.hide} )}
          underlayColor="#f2f2f2"
        >
          <View>
            <View style={{ flexDirection:'row', justifyContent: 'space-between', padding: 5 }}>
              <View style={{ flexDirection:'column' }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{address}</Text>
              </View>
              <View style={styles.circle}>
                <Text style={styles.price}>{price}€</Text>
              </View>
            </View>

            <View style={this.renderRespond()}>

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

              <View style={styles.containerBottom}>
                <View style={styles.containerTerminate}>
                  <Text style={styles.terminate}>R E S P O N D E R</Text>
                </View>
              </View>

            </View>
          </View>
        </TouchableHighlight>
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
  },

  respondHide: {
    height: 0,
    opacity: 0
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
    backgroundColor: '#b7e885',
    alignItems: 'center',
    justifyContent: 'center'
  },

  terminate: {
    color: 'black',
    fontFamily: 'arial',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 10
  },
});


export default Item;
