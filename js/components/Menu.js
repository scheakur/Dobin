import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { STATUS_BAR_HEIGHT } from '../const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  text: {
    color: '#fff',
  },
});


export default class Menu extends Component {

  renderMenu() {
    return (
      <Text style={styles.text}>menu</Text>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderMenu()}
      </View>
    );
  }

}
