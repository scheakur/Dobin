import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { STATUS_BAR_HEIGHT } from '../const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263238',
    paddingTop: STATUS_BAR_HEIGHT,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    fontSize: 16,
    color: '#fff',
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});




export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.renderMenu = this.renderMenu.bind(this);
  }


  getMenuList() {
    return [
      {
        label: 'Tasks',
        icon: 'playlist-add-check',
        onPress: () => {},
      },
      {
        label: 'History',
        icon: 'history',
        onPress: () => {},
      },
      {
        label: 'Settings',
        icon: 'settings',
        onPress: () => {},
      },
    ];
  }


  renderMenu(menu, index) {
    return (
      <TouchableOpacity
        key={`menu-${index}`}
        style={styles.menu}
        onPress={menu.onPress}
      >
        <Icon style={styles.icon} name={menu.icon} />
        <Text style={styles.text}>{menu.label}</Text>
      </TouchableOpacity>
    );
  }


  renderMenuList() {
    return this.getMenuList().map(this.renderMenu);
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderMenuList()}
      </View>
    );
  }

}
