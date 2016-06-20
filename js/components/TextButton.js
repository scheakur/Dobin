import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { THEME_COLOR } from '../const';

export default class TextButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.button}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }

}


TextButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
};


const styles = StyleSheet.create({
  button: {
    color: THEME_COLOR,
  },
});
