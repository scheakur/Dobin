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
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Drawer from 'react-native-drawer';
import { Scene, Task, TaskForm, Timer } from '../components';
import actions from '../actions';
import { STATUS_BAR_HEIGHT } from '../const';


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
      onPress: () => { this.refs.drawer.open(); },
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


  renderMenu() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#263238',
          paddingTop: STATUS_BAR_HEIGHT,
        }}
      >
        <Text style={{ color: '#fff' }}>menu</Text>
      </View>
    );
  }


  render() {
    return (
      <Drawer
        ref="drawer"
        type="overlay"
        tapToClose
        content={this.renderMenu()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-10}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
      >
        <View style={{ paddingLeft: 10, flex: 1 }}>
          <Scene title="Task List" leftItem={this.makeMenuButton()}>
            {this.renderTimer()}
            {this.renderList()}
            {this.renderForm()}
            <KeyboardSpacer />
          </Scene>
        </View>
      </Drawer>
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

