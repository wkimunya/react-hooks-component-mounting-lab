import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: [],
  };

  componentDidMount() {
    // Invoke handleAddTimer when the App component mounts
    this.handleAddTimer();
  }

  componentWillUnmount() {
    // Clean up any timers when the App component unmounts
    this.state.timerIDs.forEach((id) => {
      this.removeTimer(id);
    });
  }

  handleAddTimer = () => {
    // Add a new timer with a random ID
    const newTimerID = Math.floor(Math.random() * 1000);
    this.setState((prevState) => ({
      timerIDs: [...prevState.timerIDs, newTimerID],
    }));
  };

  removeTimer = (id) => {
    // Remove a timer with the given ID
    this.setState((prevState) => ({
      timerIDs: prevState.timerIDs.filter((timerId) => timerId !== id),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>
        <div className="TimerGrid">{this.renderTimers()}</div>
      </div>
    );
  }

  renderTimers = () =>
    this.state.timerIDs.map((id) => (
      <Timer key={id} id={id} removeTimer={this.removeTimer} />
    ));
}

export default App;
