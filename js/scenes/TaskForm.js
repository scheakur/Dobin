import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { RowButton, Scene } from '../components';
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
          <TextInput
            ref="input"
            style={styles.input}
            placeholder="Input task..."
            onChangeText={taskTitle => this.setState({ taskTitle })}
            multiline={true}
            autoFocus={true}
            defaultValue={this.state.taskTitle}
          />
          <RowButton label={`SAVE`} onPress={this.addTask}/>
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
    justifyContent: 'flex-start',
  },
  input: {
    height: 120,
    padding: 3,
    fontSize: 18,
    backgroundColor: '#ffffff',
  },
});
