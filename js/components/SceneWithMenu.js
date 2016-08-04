import React, { Component, PropTypes, } from 'react';
import { Scene, MenuDrawer } from '../components';

export default class SceneWithMenu extends Component {

  makeMenuButton() {
    return {
      type: 'icon',
      iconName: 'menu',
      onPress: () => { this.menuDrawer.open(); },
    };
  }


  render() {
    return (
      <MenuDrawer
        navigator={this.props.navigator}
        ref={menuDrawer => { this.menuDrawer = menuDrawer; }}
      >
        <Scene
          title={this.props.title}
          leftItem={this.makeMenuButton()}
        >
          {this.props.children}
        </Scene>
      </MenuDrawer>
    );
  }

}


SceneWithMenu.propTypes = {
  children: PropTypes.node,
  navigator: PropTypes.object,
  rightItem: PropTypes.object,
  title: PropTypes.string,
};
