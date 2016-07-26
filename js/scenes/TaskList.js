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
import { Scene, Task, TaskForm, Timer, MenuDrawer } from '../components';
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


  makeMenuButton() {
    return {
      type: 'icon',
      iconName: 'menu',
      onPress: () => { this.drawer.open(); },
    };
  }


  renderRow(task, sectionId, rowId) {
    return (
      <Task
        {...task}
        key={`task-${sectionId}-${rowId}`}
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
      <MenuDrawer ref={drawer => { this.drawer = drawer; }}>
        <Scene title="Task List" leftItem={this.makeMenuButton()}>
          {this.renderTimer()}
          {this.renderList()}
          {this.renderForm()}
          <KeyboardSpacer />
        </Scene>
      </MenuDrawer>
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
    addTask: (task) => dispatch(actions.addTask(task)),
  })
)(TaskList);

