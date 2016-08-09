import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { SceneWithMenu, Task, TaskForm, Timer } from '../components';
import actions from '../actions';


const styles = StyleSheet.create({
  timerContaienr: {
    top: 0,
  },
  formContaienr: {
    bottom: 0,
  },
});


class TaskList extends Component {

  constructor(...args) {
    super(...args);

    this.renderRow = this.renderRow.bind(this);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const [props] = args;

    this.state = {
      dataSource: ds.cloneWithRows(props.tasks),
    };
  }


  renderRow(task, sectionId, rowId) {
    return (
      <Task
        {...task}
        key={`task-${sectionId}-${rowId}`}
        checked={task.done}
        onChange={() => this.props.toggleTask(task)}
      />
    );
  }


  renderTimer() {
    return (
      <View style={styles.timerContaienr}>
        <Timer minutes={25} />
      </View>
    );
  }


  renderList() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.state.dataSource.cloneWithRows(this.props.tasks)}
        renderRow={this.renderRow}
      />
    );
  }


  renderForm() {
    return (
      <View style={styles.formContaienr}>
        <TaskForm onSave={this.props.addTask} />
      </View>
    );
  }


  render() {
    return (
      <SceneWithMenu title="Task List" navigator={this.props.navigator}>
        {this.renderTimer()}
        {this.renderList()}
        {this.renderForm()}
        <KeyboardSpacer />
      </SceneWithMenu>
    );
  }

}


TaskList.propTypes = {
  navigator: PropTypes.object,
  tasks: PropTypes.array,
  addTask: PropTypes.func,
};


export default connect(
  ({ tasks }) => ({ tasks: tasks.tasks }),
  (dispatch) => ({
    addTask: task => dispatch(actions.addTask(task)),
    toggleTask: task => dispatch(actions.toggleTask(task)),
  })
)(TaskList);

