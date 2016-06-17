import React, {
  Component,
  PropTypes,
} from 'react';

import {
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connect } from 'react-redux';
import { Scene } from '../components';

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
      <View style={styles.task} key={`task-${sectionId}-${rowId}`}>
        <Text>{task.title}</Text>
      </View>
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
  task: {
    paddingHorizontal: 4,
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
});
