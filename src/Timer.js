import React, { Component } from 'react';

class Timer extends Component {
  state = {
    time: 0,
    color: '#' + Math.floor(Math.random() * 16777215).toString(16),
  };

  componentDidMount() {
    // Initialize an interval to call clockTick every second
    this.interval = setInterval(this.clockTick, 1000);
  }

  componentWillUnmount() {
    // Clean up the interval when the Timer component unmounts
    clearInterval(this.interval);
  }

  clockTick = () => {
    this.setState((prevState) => ({
      time: prevState.time + 1,
    }));
  };

  stopClock = () => {
    // You can call this function to stop the timer manually
    clearInterval(this.interval);
  };

  handleClose = () => {
    this.props.removeTimer(this.props.id);
  };

  render() {
    return (
      <section className="Timer" style={{ background: this.state.color }}>
        <h1>{this.state.time}</h1>
        <button onClick={this.stopClock}>Stop</button>
        <aside className="mountText">Mounted</aside>
        <small onClick={this.handleClose}>X</small>
      </section>
    );
  }
}

export default Timer;
