import React, { PropTypes } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { THEME_COLOR } from '../const';


const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#e0e0e0',
    padding: 10,
  },
  buttonText: {
    color: THEME_COLOR,
    textAlign: 'center',
    fontSize: 20,
  },
});


const RowButton = props => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.label}</Text>
  </TouchableOpacity>
);


RowButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
};


export default RowButton;
