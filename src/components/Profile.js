import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from './common/Header';
import Navbar from './common/Navbar';
import Input from './common/Input';


class Profile extends Component<{}> {

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
          <Text style={styles.title}>PERFIL</Text>

          <Input
            title="USERNAME"
          />
          <Input
            title="PASSWORD"
          />
          <Input
            title="CONTACTO TELEFONICO"
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
          selectedTab="3"
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
    paddingTop: 25,
    paddingBottom: 30
  },

  listContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#f5a826',
    padding: 12,
    borderRadius: 10,
    width: 150,
    marginBottom: 45
  },

  buttonText: {
    color: 'black',
    fontFamily: 'Arial',
    fontSize: 12
  }
});

export default Profile;
