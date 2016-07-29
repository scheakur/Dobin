import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Drawer from 'react-native-drawer';
import { Menu } from '../components';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
  },
});


// Plain Old JavaScript Object
const drawerStyle = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
};


export default class MenuDrawer extends Component {

  open() {
    this.refs.drawer.open();
  }

  renderMenu() {
    return (
      <Menu navigator={this.props.navigator} />
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
        styles={drawerStyle}
      >
        <View style={styles.container}>
          {this.props.children}
        </View>
      </Drawer>
    );
  }

}


MenuDrawer.propTypes = {
  navigator: PropTypes.object,
  children: PropTypes.node,
};
