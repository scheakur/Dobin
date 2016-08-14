import React, {
  Component,
  PropTypes,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { THEME_COLOR, TAB_BAR_HEIGHT } from '../const';

const BUTTON_WIDTH = 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 24,
    color: '#222',
  },
  spacer: {
    width: BUTTON_WIDTH,
  },
  button: {
    padding: 8,
    width: BUTTON_WIDTH,
    height: TAB_BAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: THEME_COLOR,
    fontSize: 20,
  },
});


export default class Timer extends Component {

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.stop = this.stop.bind(this);

    const goal = props.hours * 60 * 60 + props.minutes * 60 + props.seconds;

    this.state = {
      goal,
      started: 0,
      now: 0,
      temporalElapsed: 0,
    };
  }


  componentWillUnmount() {
    this.stop();
  }


  runTimer() {
    this.id = setInterval(() => {
      this.setState({
        now: Date.now(),
      });
    }, 1000);
  }


  start() {
    const now = Date.now();
    this.setState({
      started: now,
      now,
    });

    this.runTimer();
  }


  pause() {
    if (this.id) {
      clearInterval(this.id);
    }

    const temporalElapsed = this.state.now - this.state.started;

    this.setState({ temporalElapsed });
  }


  resume() {
    const now = Date.now();
    this.setState({
      started: now - this.state.temporalElapsed,
      now,
      temporalElapsed: 0,
    });

    this.runTimer();
  }


  stop() {
    if (this.id) {
      clearInterval(this.id);
    }

    this.setState({
      started: 0,
      now: 0,
      temporalElapsed: 0,
    });
  }


  padLeft(num) {
    return `0${num}`.slice(-2);
  }


  renderSpacer() {
    return (
      <View style={styles.spacer} />
    );
  }

  renderButton(label, onPress) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }


  renderPauseResumeButton() {
    if (this.state.temporalElapsed > 0) {
      return this.renderButton('RESUME', this.resume);
    }

    if (this.state.started > 0) {
      return this.renderButton('PAUSE', this.pause);
    }

    return this.renderSpacer();
  }


  renderToggleButton() {
    if (this.state.temporalElapsed > 0 || this.state.started > 0) {
      return this.renderButton('STOP', this.stop);
    }

    return this.renderButton('START', this.start);
  }


  render() {
    const elapsed = Math.floor((this.state.now - this.state.started) / 1000);
    const rest = Math.max(this.state.goal - elapsed, 0);

    if (rest === 0) {
      this.stop();
    }

    const seconds = this.padLeft(Math.floor(rest % 60));
    const minutes = this.padLeft(Math.floor(rest / 60) % 60);
    const hours = this.padLeft(Math.floor(rest / 60 / 60) % 60);

    return (
      <View style={styles.container}>
        {this.renderPauseResumeButton()}
        <Text style={styles.text}>{hours}:{minutes}:{seconds}</Text>
        {this.renderToggleButton()}
      </View>
    );
  }

}


Timer.propTypes = {
  hours: PropTypes.number,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
};


Timer.defaultProps = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};
