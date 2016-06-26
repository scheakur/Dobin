import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { Scene, Task } from '../components';
import { THEME_COLOR } from '../const';

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


  startTimer(task) {
    this.props.home.selectTab('taskTimer');
  }


  showTaskForm() {
    this.props.navigator.push({
      taskForm: true,
      title: 'New Task',
    });
  }


  makeAddButton() {
    return {
      type: 'icon',
      iconName: 'add',
      onPress: () => {
        this.props.navigator.push({
          taskForm: true,
          title: 'New Task',
        });
      },
    }
  }


  renderRow(task, sectionId, rowId) {
    return (
      <Task
        {...task}
        key={`task-${sectionId}-${rowId}`}
        onPressStart={this.startTimer.bind(this, task)}/>
    );
  }


  render() {
    return (
      <Scene title="Task List" rightItem={this.makeAddButton()}>
        <ListView
          contentContainerStyle={styles.container}
          enableEmptySections
          dataSource={this.state.dataSource.cloneWithRows(this.props.tasks)}
          renderRow={this.renderRow}
        />
        <View style={styles.buttonContaienr}>
          <TouchableOpacity style={styles.button} onPress={this.showTaskForm}>
            <Text style={styles.buttonText}>{`ADD TASK`}</Text>
          </TouchableOpacity>
        </View>
      </Scene>
    );
  }

}


TaskList.propTypes = {
  navigator: PropTypes.object,
};


export default connect(
  ({ tasks }) => ({ tasks: tasks.tasks }),
  null
)(TaskList);


const styles = StyleSheet.create({
  container: {
    marginTop: -18,
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
  buttonContaienr: {
    bottom: 49,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  buttonText: {
    color: THEME_COLOR,
    textAlign: 'center',
    fontSize: 20,
  },
});
