import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import Navbar from './common/Navbar';
import { titleChanged, addressChanged, priceChanged, timeChanged, phoneChanged, createOrder } from '../actions';
import { connect } from 'react-redux';


class NewRequest extends Component<{}> {

  onTitleChange(text) {
    this.props.titleChanged(text);
  }

  onAddressChange(text) {
    this.props.addressChanged(text);
  }

  onPriceChange(text) {
    this.props.priceChanged(text);
  }

  onTimeChange(text) {
    this.props.timeChanged(text);
  }

  onPhoneChange(text) {
    this.props.phoneChanged(text);
  }

  handleOnPressButton() {
    const { navigate } = this.props.navigation;
    const { title, address, price, time, phone } = this.props;

    //this.props.createOrder({  });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header />

        <View style={styles.listContainer}>
          <Text style={styles.title}>ADICIONA UM PEDIDO</Text>

          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.props.title}
            placeholder="Descrição"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.props.address}
            placeholder="Morada"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.props.price}
            placeholder="Preço"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({text})}
            value={this.props.time}
            placeholder="Tempo de espera máximo (minutos)"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onPhoneChange.bind(this)}
            value={this.state.phone}
            placeholder="Contacto telefónico"
          />

          <TouchableOpacity onPress={this._onPressButton}
            onPress={() => this.handleOnPressButton()}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>SUBMETER</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Navbar
          navigation={this.props.navigation}
          selectedTab="1"
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

  title: {
    color: 'black',
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 25
  },

  listContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 40,
  },

  input: {
    marginTop: 25,
    padding: 15,
    alignSelf: 'stretch',
    borderColor: '#b3b2b3',
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 14,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#f5a826',
    padding: 12,
    borderRadius: 10,
    width: 150,
    marginTop: 25
  },

  buttonText: {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: 12
  }
});

const mapStateToProps = ({ order }) => {
  const { title, address, price, time, phone } = order;
  return { title, address, price, time, phone };
};

export default connect(mapStateToProps, {
  titleChanged, addressChanged, priceChanged, timeChanged, phoneChanged, createOrder
})(NewRequest);
