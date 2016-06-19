import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import {
  TaskList,
  TaskTimer,
  Settings,
} from './';

import { THEME_COLOR } from '../const';

import { TabBarItemIOS } from 'react-native-vector-icons/MaterialIcons';

export default class Home extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      selectedTab: 'taskList',
    }
  }


  isSelected(tab) {
    return this.state.selectedTab === tab;
  }


  selectTab(selectedTab) {
    this.setState({ selectedTab });
  }


  render() {
    return (
      <TabBarIOS tintColor={THEME_COLOR}>
        <TabBarItemIOS
          title="Task List"
          iconName="playlist-add-check"
          selected={this.isSelected('taskList')}
          onPress={this.selectTab.bind(this, 'taskList')}>
          <TaskList {...this.props} home={this}/>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Timer"
          iconName="timer"
          selected={this.isSelected('taskTimer')}
          onPress={this.selectTab.bind(this, 'taskTimer')}>
          <TaskTimer {...this.props} home={this}/>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Settings"
          iconName="settings"
          selected={this.isSelected('settings')}
          onPress={this.selectTab.bind(this, 'settings')}>
          <Settings {...this.props} home={this}/>
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }

}


Home.propTypes = {
  navigator: PropTypes.object,
};
