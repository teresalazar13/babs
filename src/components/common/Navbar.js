import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

class Navbar extends Component<{}> {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <TouchableHighlight style={styles.leftSubContainer} underlayColor="#a1a0a1" onPress={this._onPressButton}
          onPress={() => navigate('NewRequest')}
        >
          <Text style={styles.title}>NEW REQUEST</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.leftSubContainer} underlayColor="#a1a0a1" onPress={this._onPressButton}
          onPress={() => navigate('Home')}
        >
          <Text style={styles.title}>HOME</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.leftSubContainer} underlayColor="#a1a0a1" onPress={this._onPressButton}
          onPress={() => navigate('Home')}
        >
          <Text style={styles.title}>PROFILE</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  centerSubContainer: {
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    backgroundColor: '#d9d8d9',
    alignItems: 'center',
    flex: 1,
  },

  centerSelectedSubContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b2b3',
    flex: 1,
  },

  rightSubContainer: {
    borderLeftWidth: 1,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    backgroundColor: '#d9d8d9',
    alignItems: 'center',
    flex: 1,
  },

  rightSelectedSubContainer: {
    borderLeftWidth: 1,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b2b3',
    flex: 1,
  },

  leftSubContainer: {
    borderRightWidth: 1,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    backgroundColor: '#d9d8d9',
    alignItems: 'center',
    flex: 1,
  },

  leftSelectedSubContainer: {
    borderRightWidth: 1,
    borderColor: '#a1a0a1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3b2b3',
    flex: 1,
  },

  title: {
    color: 'black',
    fontFamily: 'arial',
    fontSize: 10
  }
});


export default Navbar;
