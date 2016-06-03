import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Navigator,
} from 'react-native';

import { connect } from 'react-redux';

import { Home } from './scenes';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.configureScene = this.configureScene.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }


  configureScene(route) {
    console.log('configure', route);
    if (route.home) {
      return Navigator.SceneConfigs.PushFromRight;
    }

    return Navigator.SceneConfigs.HorizontalSwipeJump;
  }


  renderScene(route, navigator) {
    console.log('render route', route);

    return (
      <Home navigator={navigator} {...route}/>
    );
  }


  render() {
    console.log('render nav');

    return (
      <Navigator
        style={styles.container}
        initialRoute={{ home: true }}
        configureScene={this.configureScene}
        renderScene={this.renderScene}
      />
    );
  }

}


export default connect(({ app }) => ({ app }))(Nav);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

