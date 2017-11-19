import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Input extends Component<{}> {


  render() {
    const { title, secureTextEntry, value, onChangeText } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.titleCointainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },

  titleCointainer: {
  },

  title: {
    color: '#b3b2b3',
    fontFamily: 'arial',
    fontWeight: 'bold'
  },

  input: {
    marginTop: 10,
    padding: 10,
    alignSelf: 'stretch',
    borderColor: '#b3b2b3',
    borderWidth: 2,
    borderRadius: 5,
  }
});

export default Input;
