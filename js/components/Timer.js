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

export default class Timer extends Component {

  constructor(props) {
    super(props);

    this.start = this.start.bind(this);

    const goal = props.hours * 60 * 60 + props.minutes * 60 + props.seconds;

    this.state = {
      goal: goal,
      started: 0,
      now: 0,
    };
  }


  start() {
    const now = Date.now();
    this.setState({
      started: now,
      now: now,
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
  }


  componentWillUnmount() {
    this.stop();
  }


  padLeft(num) {
    return ('0' + num).slice(-2);
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
        <TouchableOpacity onPress={this.start}>
          <Text>Start</Text>
        </TouchableOpacity>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Courier New',
    fontSize: 20,
    color: '#f00',
  },
});
