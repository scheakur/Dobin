import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  HEADER_HEIGHT,
  STATUS_BAR_HEIGHT,
  THEME_COLOR,
  THEME_COLOR_INV,
} from '../const';


export default class Header extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      width: Dimensions.get('window').width,
    };
  }

  render() {
    const width = {
      width: this.state.width,
    };

    return (
      <View style={[styles.container, width]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </View>
    );
  }

}


Header.propTypes = {
  title: PropTypes.string,
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
});
