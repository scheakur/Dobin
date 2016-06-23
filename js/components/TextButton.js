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

const TextButton = props => {
  return (
    <TouchableOpacity
      style={[props.containerStyle]}
      onPress={props.onPress}>
      <Text style={[styles.button, props.textStyle]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

TextButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};


const styles = StyleSheet.create({
  button: {
    color: THEME_COLOR,
  },
});
