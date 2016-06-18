import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { THEME_COLOR } from '../const';

export default class Task extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }

}


Task.propTypes = {
  title: PropTypes.string,
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 20,
    color: THEME_COLOR,
  },
});
