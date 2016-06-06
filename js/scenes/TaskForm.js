import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { Scene } from '../components';
import actions from '../actions';

import {
  THEME_COLOR,
  THEME_COLOR_INV,
} from '../const';

class TaskForm extends Component {

  constructor(...args) {
    super(...args);

    this.addTask = this.addTask.bind(this);

    this.state = {
      taskTitle: '',
    };
  }


  addTask() {
    if (this.state.taskTitle.trim().length === 0) {
      return;
    }

    this.props.addTask({
      title: this.state.taskTitle,
    });
    this.setState({
      taskTitle: '',
    });
    this.refs.input.clear();
    this.props.navigator.pop();
  }


  makeCloseButton() {
    return {
      type: 'icon',
      iconName: 'close',
      onPress: () => {
        this.props.navigator.pop();
      },
    };
  }


  render() {
    return (
      <Scene title={this.props.title} leftItem={this.makeCloseButton()}>
        <View style={styles.container}>
          <Text style={styles.text}>TaskForm</Text>
          <TextInput
            ref="input"
            style={styles.input}
            placeholder="Input task..."
            onChangeText={(text) => this.setState({ taskTitle: text})}
            defaultValue={this.state.taskTitle}
          />
          <TouchableOpacity style={styles.button} onPress={this.addTask}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Scene>
    );
  }

}


TaskForm.propTypes = {
  navigator: PropTypes.object,
};


export default connect(
  null,
  (dispatch) => ({
    addTask: (task) => dispatch(actions.addTask(task)),
  })
)(TaskForm);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
  input: {
    height: 30,
    width: 300,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 3,
  },
  button: {
    backgroundColor: THEME_COLOR,
    margin: 3,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  buttonText: {
    color: THEME_COLOR_INV,
  },
});
