import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

import { SceneWithMenu } from '../components';


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


  render() {
    return (
      <SceneWithMenu title="History" navigator={this.props.navigator}>
        <Text style={styles.text}>History</Text>
      </SceneWithMenu>
    );
  }

}


History.propTypes = {
  navigator: PropTypes.object,
  tasks: PropTypes.array,
};


export default History;
