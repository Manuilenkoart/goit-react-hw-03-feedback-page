import React, { Component } from 'react';

export default class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  handleTotalFeedback = () => {
    return Object.values(this.state.feedback).reduce(
      (acc, value) => acc + value,
    );
  };

  handlePositiveVotes = () => {
    return (
      (this.state.feedback.good / this.handleTotalFeedback()) *
      100
    ).toFixed(2);
  };

  incrimentNeutral = () => {
    const { feedback } = this.state;
    this.setState(prevState => ({
      feedback: {
        ...feedback,
        neutral: prevState.feedback.neutral + 1,
      },
    }));
  };

  incrimentGood = () => {
    const { feedback } = this.state;

    this.setState(prevState => ({
      feedback: { ...feedback, good: prevState.feedback.good + 1 },
    }));
  };

  incrimentBad = () => {
    const { feedback } = this.state;

    this.setState(prevState => ({
      feedback: { ...feedback, bad: prevState.feedback.bad + 1 },
    }));
  };

  render() {
    const { feedback } = this.state;
    const { good, neutral, bad } = feedback;
    return (
      <div>
        <h1>Leave feedback</h1>
        <button type="button" onClick={this.incrimentGood}>
          Good
        </button>
        <button type="button" onClick={this.incrimentNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.incrimentBad}>
          Bad
        </button>
        <h2>Statistics:</h2>

        {this.handleTotalFeedback() ? (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.handleTotalFeedback()}</p>
            <p>Positive votes: {this.handlePositiveVotes()}%</p>
          </>
        ) : (
          <p>no feedback given</p>
        )}
      </div>
    );
  }
}
