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
import { RowButton, Scene, Task, Timer } from '../components';
import { TAB_BAR_HEIGHT } from '../const';


const styles = StyleSheet.create({
  container: {
    marginTop: -18,
  },
  timerContaienr: {
    top: 0,
  },
  buttonContaienr: {
    bottom: TAB_BAR_HEIGHT,
  },
});


class TaskList extends Component {

  constructor(...args) {
    super(...args);

    this.showTaskForm = this.showTaskForm.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const [props] = args;

    this.state = {
      dataSource: ds.cloneWithRows(props.tasks),
    };
  }


  showTaskForm() {
    this.props.navigator.push({
      taskForm: true,
      title: 'New Task',
    });
  }


  renderRow(task, sectionId, rowId) {
    return (
      <Task
        {...task}
        key={`task-${sectionId}-${rowId}`}
      />
    );
  }


  render() {
    return (
      <Scene title="Task List">
        <View style={styles.timerContaienr}>
          <Timer minutes={25} />
        </View>
        <ListView
          contentContainerStyle={styles.container}
          enableEmptySections
          dataSource={this.state.dataSource.cloneWithRows(this.props.tasks)}
          renderRow={this.renderRow}
        />
        <View style={styles.buttonContaienr}>
          <RowButton label={"ADD TASK"} onPress={this.showTaskForm} />
        </View>
      </Scene>
    );
  }

}


TaskList.propTypes = {
  navigator: PropTypes.object,
  tasks: PropTypes.array,
  home: PropTypes.object,
};


export default connect(
  ({ tasks }) => ({ tasks: tasks.tasks }),
  null
)(TaskList);

