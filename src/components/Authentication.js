import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from './common/Input';

class Authentication extends Component<{}> {

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>babs</Text>
          <Text style={styles.subtitle}>C O I M B R A  N A  T U A  M Ã O</Text>
        </View>
        <View style={styles.authContainer}>
          <Input
            title="USERNAME"
          />
          <Input
            title="PASSWORD"
          />
          <View style={{ alignSelf: 'stretch' }}>
            <TouchableOpacity onPress={this._onPressButton}
              onPress={() => navigate('Home')}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>E N T R A R</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flex: 0.4,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5a826',
  },

  title: {
    color: 'white',
    fontSize: 55,
    fontFamily: 'Arial',
    fontStyle: 'italic',
    fontWeight: 'bold',
    paddingTop: 100
  },

  subtitle: {
    color: '#d9d8d9',
    fontSize: 16,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    paddingBottom: 30
  },

  authContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#d9d8d9',
    padding: 18,
    marginBottom: 60,
    borderRadius: 5,
  },

  buttonText: {
    color: 'black',
    fontFamily: 'Arial',
    fontWeight: '400',
    fontSize: 12
  }
});

export default Authentication;
