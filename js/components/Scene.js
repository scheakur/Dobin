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

import { STATUS_BAR_STYLE, HEADER_HEIGHT } from '../const';

export default class Scene extends Component {

  render() {
    const { title, leftItem, rightItem, style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <StatusBar barStyle={STATUS_BAR_STYLE}/>
        <Header title={title} leftItem={leftItem} rightItem={rightItem}/>
        <View style={styles.contents}>
          {this.props.children}
        </View>
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
    backgroundColor: '#fff',
  },
  contents: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
  text: {
    fontSize: 20,
    color: '#f00',
  },
});
