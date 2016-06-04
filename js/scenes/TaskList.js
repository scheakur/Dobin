import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Scene } from '../components';

export default class TaskList extends Component {


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

  render() {
    return (
      <Scene title="Task List" rightItem={this.makeAddButton()}>
        <View style={styles.container}>
          <Text style={styles.text}>TaskList</Text>
        </View>
      </Scene>
    );
  }

}


TaskList.propTypes = {
  navigator: PropTypes.object,
};


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
