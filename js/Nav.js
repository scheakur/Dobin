import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Navigator,
} from 'react-native';

import { connect } from 'react-redux';

import {
  Settings,
  TaskList,
} from './scenes';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


class Nav extends Component {

  constructor(props) {
    super(props);
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }


  configureScene(route) {
    console.log(route);
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }


  renderScene(route, navigator) {
    console.log('render route', route);
    if (route.settings) {
      return (
        <Settings navigator={navigator} {...route} />
      );
    }

    return (
      <TaskList navigator={navigator} {...route} />
    );
  }


  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ taskList: true }}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }

}


export default connect(({ app }) => ({ app }))(Nav);
