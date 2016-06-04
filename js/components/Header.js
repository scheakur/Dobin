import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
  THEME_COLOR,
  THEME_COLOR_INV,
  NAVIGATION_BAR_HEIGHT,
} from '../const';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Header extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      width: Dimensions.get('window').width,
    };
  }


  renderItem(item) {
    if (!item) {
      // spacer
      return (
        <View style={styles.item}/>
      );
    }

    if (item.type === 'icon') {
      return (
        <TouchableOpacity style={styles.item} onPress={item.onPress}>
          <Icon style={styles.icon} name={item.iconName} size={20}/>
        </TouchableOpacity>
      );
    }

    return (
      <Icon style={styles.icon} name="help" size={20}/>
    );
  }


  render() {
    const width = {
      width: this.state.width,
    };

    return (
      <View style={[styles.container, width]}>
        {this.renderItem(this.props.leftItem)}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        {this.renderItem(this.props.rightItem)}
      </View>
    );
  }

}


Header.propTypes = {
  title: PropTypes.string,
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
};


Header.defaultProps = {
  title: '',
};


const styles = StyleSheet.create({
  container: {
    flex: 0,
    position: 'absolute',
    top: 0,
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME_COLOR,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: THEME_COLOR_INV,
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    height: NAVIGATION_BAR_HEIGHT,
    width: NAVIGATION_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: THEME_COLOR_INV,
  },
});
