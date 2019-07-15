import React, { Component } from 'react';
import API from "../Util/API"


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      seconds: 0
     };
  }
  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <>
        Seconds: {this.state.seconds}
      </>
    );
  }
}

  // ReactDOM.render(
  //   <Timer />,
  //   document.getElementById('timer-example')
  // );

export default Timer;