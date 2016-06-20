import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TextButton } from '../components';

export default class Task extends Component {


  renderTitle() {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }


  renderStartButton() {
    return (
      <TextButton label={`START`} onPress={this.props.onPressStart}/>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderTitle()}
        {this.renderStartButton()}
      </View>
    );
  }

}


Task.propTypes = {
  title: PropTypes.string,
  onPressStart: PropTypes.func,
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});
