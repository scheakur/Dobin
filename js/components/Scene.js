import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Header } from './';

import { STATUS_BAR_STYLE } from '../const';

export default class Scene extends Component {

  render() {
    const { title, leftItem, rightItem, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <StatusBar barStyle={STATUS_BAR_STYLE}/>
        <Header title={title} leftItem={leftItem} rightItem={rightItem}/>
        {this.props.children}
      </View>
    );
  }

}


Scene.propTypes = {
  title: PropTypes.string,
  leftItem: PropTypes.object,
  rightItem: PropTypes.object,
};


Scene.defaultProps = {
  title: 'Dummy Title',
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
});
