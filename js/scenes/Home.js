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

    this.onSelectTab = this.onSelectTab.bind(this);

    this.state = {
      selectedTab: 'tasklist',
    }
  }


  isSelected(tab) {
    return this.state.selectedTab === tab;
  }


  onSelectTab(selectedTab) {
    this.setState({ selectedTab });
  }


  render() {
    return (
      <TabBarIOS tintColor={THEME_COLOR}>
        <TabBarItemIOS
          title="Task List"
          iconName="playlist-add-check"
          selected={this.isSelected('tasklist')}
          onPress={this.onSelectTab.bind(this, 'tasklist')}>
          <TaskList {...this.props}/>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Timer"
          iconName="timer"
          selected={this.isSelected('tasktimer')}
          onPress={this.onSelectTab.bind(this, 'tasktimer')}>
          <TaskTimer {...this.props}/>
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Settings"
          iconName="settings"
          selected={this.isSelected('settings')}
          onPress={this.onSelectTab.bind(this, 'settings')}>
          <Settings {...this.props}/>
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }

}


Home.propTypes = {
  navigator: PropTypes.object,
};
