import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { THEME_COLOR, COLOR_GRAY } from '../const';


const styles = StyleSheet.create({
  checkBox: {
    fontSize: 24,
    color: THEME_COLOR,
  },
  readonly: {
    color: COLOR_GRAY,
  },
});


export default class CheckBox extends Component {

  constructor(...args) {
    super(...args);

    this.onPress = this.onPress.bind(this);
  }


  onPress() {
    console.log('checkbox on press');
    if (this.props.readonly) {
      return;
    }

    this.props.onChange();
  }


  get checkBoxStyle() {
    if (this.props.readonly) {
      return [styles.checkBox, styles.readonly];
    }

    return [styles.checkBox];
  }


  renderChecked() {
    return (
      <Icon style={this.checkBoxStyle} name="check-box" />
    );
  }


  renderUnchecked() {
    return (
      <Icon style={this.checkBoxStyle} name="check-box-outline-blank" />
    );
  }


  renderCheckBox() {
    if (this.props.checked) {
      return this.renderChecked();
    }

    return this.renderUnchecked();
  }


  render() {
    return (
      <TouchableOpacity
        activeOpacity={1.0}
        style={this.props.style}
        onPress={this.onPress}
      >
        {this.renderCheckBox()}
      </TouchableOpacity>
    );
  }

}


CheckBox.propTypes = {
  checked: PropTypes.bool,
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  style: PropTypes.number,
};


CheckBox.defaultProps = {
  checked: false,
  readonly: false,
  onChange: () => {},
};
