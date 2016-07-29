import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Scene, MenuDrawer } from '../components';


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


export default class Settings extends Component {

  makeMenuButton() {
    return {
      type: 'icon',
      iconName: 'menu',
      onPress: () => { this.drawer.open(); },
    };
  }


  renderContent() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings</Text>
      </View>
    );
  }

  render() {
    return (
      <MenuDrawer
        navigator={this.props.navigator}
        ref={drawer => { this.drawer = drawer; }}
      >
        <Scene title="Settings" leftItem={this.makeMenuButton()}>
          {this.renderContent()}
        </Scene>
      </MenuDrawer>
    );
  }

}


Settings.propTypes = {
  navigator: PropTypes.object,
};
