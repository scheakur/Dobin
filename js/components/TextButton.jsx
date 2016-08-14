import React, { PropTypes } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import { THEME_COLOR } from '../const';


const styles = StyleSheet.create({
  button: {
    color: THEME_COLOR,
  },
});


const TextButton = props => (
  <TouchableOpacity style={[props.containerStyle]} onPress={props.onPress}>
    <Text style={[styles.button, props.textStyle]}>
      {props.label}
    </Text>
  </TouchableOpacity>
);


TextButton.propTypes = {
  label: PropTypes.string,
  onPress: PropTypes.func,
  containerStyle: PropTypes.object,
  textStyle: PropTypes.object,
};


export default TextButton;
