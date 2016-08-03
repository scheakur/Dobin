import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

import { Scene, MenuDrawer } from '../components';


const styles = StyleSheet.create({
  text: {
    color: '#333',
  },
});


class History extends Component {

  constructor(...args) {
    super(...args);
    console.log(...args);
  }


  makeMenuButton() {
    return {
      type: 'icon',
      iconName: 'menu',
      onPress: () => { this.drawer.open(); },
    };
  }


  render() {
    return (
      <MenuDrawer
        navigator={this.props.navigator}
        ref={drawer => { this.drawer = drawer; }}
      >
        <Scene title="History" leftItem={this.makeMenuButton()}>
          <Text style={styles.text}>History</Text>
        </Scene>
      </MenuDrawer>
    );
  }

}


History.propTypes = {
  navigator: PropTypes.object,
  tasks: PropTypes.array,
};


export default History;
