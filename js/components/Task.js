import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { CheckBox } from '../components';


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
  checkBox: {
    marginRight: 4,
  },
});


export default class Task extends Component {

  renderCheckBox() {
    return (
      <CheckBox
        style={styles.checkBox}
        checked={this.props.checked}
        readOnly={this.props.readOnly}
      />
    );
  }

  renderTitle() {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
        {this.renderCheckBox()}
        {this.renderTitle()}
      </View>
    );
  }

}


Task.propTypes = {
  checked: PropTypes.bool,
  readOnly: PropTypes.bool,
  title: PropTypes.string,
};


Task.defaultProps = {
  checked: false,
  readOnly: false,
};
