import React, { Component, PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { STATUS_BAR_HEIGHT, COLOR_DARK } from '../const';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_DARK,
    paddingTop: STATUS_BAR_HEIGHT + 20,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  },
  text: {
    fontSize: 18,
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
        onPress: () => { this.props.navigator.replace({ taskList: true }) },
      },
      {
        label: 'History',
        icon: 'history',
        onPress: () => { this.props.navigator.replace({ history: true }) },
      },
      {
        label: 'Settings',
        icon: 'settings',
        onPress: () => { this.props.navigator.replace({ settings: true }) },
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


Menu.propTypes = {
  navigator: PropTypes.object,
};
