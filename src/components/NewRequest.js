import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import Navbar from './common/Navbar';


class NewRequest extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      textDescription: '',
      textAddress: '',
      textPrice: '',
      textTime: '',
      textContact:''
    };
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
            onChangeText={(textDescription) => this.setState({textDescription})}
            value={this.state.textDescription}
            placeholder="Descrição"
          />
          <TextInput
            style={styles.input}
            onChangeText={(textAddress) => this.setState({textAddress})}
            value={this.state.textAddress}
            placeholder="Morada"
          />
          <TextInput
            style={styles.input}
            onChangeText={(textPrice) => this.setState({textPrice})}
            value={this.state.textPrice}
            placeholder="Preço"
          />
          <TextInput
            style={styles.input}
            onChangeText={(textTime) => this.setState({textTime})}
            value={this.state.textTime}
            placeholder="Tempo de espera máximo (minutos)"
          />
          <TextInput
            style={styles.input}
            onChangeText={(textContact) => this.setState({textContact})}
            value={this.state.textContact}
            placeholder="Contacto telefónico"
          />

          <TouchableOpacity onPress={this._onPressButton}
            onPress={() => navigate('Home')}
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

export default NewRequest;
