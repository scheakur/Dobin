import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import { THEME_COLOR, THEME_COLOR_INV, COLOR_GRAY } from '../const';

const DEFAULT_HEIGHT = 32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR_GRAY,
    padding: 5,
  },
  input: {
    flex: 1,
    padding: 2,
    paddingHorizontal: 5,
    fontSize: 16,
    height: DEFAULT_HEIGHT,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: DEFAULT_HEIGHT,
    paddingHorizontal: 5,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: THEME_COLOR,
  },
  buttonText: {
    color: THEME_COLOR_INV,
  },
});


export default class TaskForm extends Component {

  constructor(...args) {
    super(...args);

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);

    this.state = {
      task: '',
      height: DEFAULT_HEIGHT,
    };
  }


  onChange(event) {
    this.setState({
      task: event.nativeEvent.text,
      height: Math.max(Math.min(event.nativeEvent.contentSize.height, 100), DEFAULT_HEIGHT),
    });
  }


  onSave() {
    if (this.state.task.trim().length === 0) {
      return;
    }

    this.props.onSave({
      title: this.state.task,
    });
    this.reset();
  }


  reset() {
    this.setState({
      task: '',
      height: DEFAULT_HEIGHT,
    });

    this.refs.input.clear();
  }


  render() {
    const heightStyle = {
      height: this.state.height,
    };

    return (
      <View style={styles.container}>
        <TextInput
          ref="input"
          style={[styles.input, heightStyle]}
          placeholder="Input task..."
          onChange={this.onChange}
          multiline
          autoFocus
          defaultValue={this.state.task}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onSave}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }

}


TaskForm.propTypes = {
  onSave: PropTypes.func,
};


TaskForm.defaultProps = {
  onSave: () => {},
};
