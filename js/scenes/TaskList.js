import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { Scene } from '../components';

class TaskList extends Component {

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


  renderTasks() {
    return this.props.tasks.map((task, index) => {
      return (
        <View key={`task-${index}`}>
          <Text>{task.title}</Text>
        </View>
      );
    });
  }


  render() {
    return (
      <Scene title="Task List" rightItem={this.makeAddButton()}>
        <View style={styles.container}>
          <Text style={styles.text}>TaskList</Text>
          {this.renderTasks()}
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
});
