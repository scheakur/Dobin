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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 20,
    color: '#222',
  },
  button: {
    margin: 10,
    paddingVertical: 10,
    width: 100,
    backgroundColor: '#009',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});


export default class Timer extends Component {

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);

    const goal = props.hours * 60 * 60 + props.minutes * 60 + props.seconds;

    this.state = {
      goal,
      started: 0,
      now: 0,
    };
  }


  componentWillUnmount() {
    this.stop();
  }


  start() {
    const now = Date.now();
    this.setState({
      started: now,
      now,
    });

    this.id = setInterval(() => {
      this.setState({
        now: Date.now(),
      });
    }, 1000);
  }


  stop() {
    if (this.id) {
      clearInterval(this.id);
    }

    this.setState({
      started: 0,
      now: 0,
    });
  }


  padLeft(num) {
    return `0${num}`.slice(-2);
  }


  renderButton(label, onPress) {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    );
  }


  renderToggleButton() {
    if (this.state.started > 0) {
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
