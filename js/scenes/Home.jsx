import React, {
  Component,
  PropTypes,
} from 'react';

import {
  TabBarIOS,
} from 'react-native';

import { TabBarItemIOS } from 'react-native-vector-icons/MaterialIcons';

import {
  TaskList,
  TaskTimer,
  Settings,
} from './';

import { THEME_COLOR } from '../const';


export default class Home extends Component {

  constructor(...args) {
    super(...args);

    this.state = {
      selectedTab: 'taskList',
    };
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
          onPress={() => this.selectTab('taskList')}
        >
          <TaskList {...this.props} home={this} />
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Timer"
          iconName="timer"
          selected={this.isSelected('taskTimer')}
          onPress={() => this.selectTab('taskTimer')}
        >
          <TaskTimer {...this.props} home={this} />
        </TabBarItemIOS>
        <TabBarItemIOS
          title="Settings"
          iconName="settings"
          selected={this.isSelected('settings')}
          onPress={() => this.selectTab('settings')}
        >
          <Settings {...this.props} home={this} />
        </TabBarItemIOS>
      </TabBarIOS>
    );
  }

}


Home.propTypes = {
  navigator: PropTypes.object,
};
