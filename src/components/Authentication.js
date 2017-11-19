import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Input from './common/Input';
import { usernameChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';

class Authentication extends Component<{}> {

  componentDidUpdate() {
    const { navigate } = this.props.navigation;
    console.log("updating");
    if (this.props.user == true) {
      navigate('Home');
    }
  }

  onUsernameChange(text) {
    this.props.usernameChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  handleOnPressButton() {
    const { navigate } = this.props.navigation;
    const { username, password, user } = this.props;
    this.props.loginUser({ username, password });
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>babs</Text>
          <Text style={styles.subtitle}>C O I M B R A  N A  T U A  M Ã O</Text>
        </View>
        <View style={styles.authContainer}>
          <Input
            title="USERNAME"
            onChangeText={this.onUsernameChange.bind(this)}
            value={this.props.username}
          />
          <Input
            title="PASSWORD"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
            secureTextEntry
          />
          <View style={{ alignSelf: 'stretch' }}>
            <TouchableOpacity onPress={this._onPressButton}
              onPress={() => this.handleOnPressButton()}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>E N T R A R</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.errorTextStyle}>
              {this.props.error}
            </Text>
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
  },

  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'black',
    fontFamily: 'Arial',
    marginBottom: 20
  }
});

const mapStateToProps = ({ auth }) => {
  const { username, password, error, user } = auth;
  return { username, password, error, user };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginUser,
})(Authentication);
