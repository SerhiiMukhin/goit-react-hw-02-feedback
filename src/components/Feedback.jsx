import { Component } from 'react';
import css from './Feedback.module.css';

export default class Feedback extends Component {
  static defaultProps = {
    step: 1,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    let total = 0;
    for (const key in this.state) {
      total += this.state[key];
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    if (isNaN(percentage)) {
      return (percentage = 0);
    } else {
      return percentage;
    }
  };

  addGood = () => {
    this.setState((state, props) => ({
      good: state.good + props.step,
    }));
  };

  addNeutral = () => {
    this.setState((state, props) => ({
      neutral: state.neutral + props.step,
    }));
  };

  addBad = () => {
    this.setState((state, props) => ({
      bad: state.bad + props.step,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button className={css.button} type="button" onClick={this.addGood}>
          Good
        </button>
        <button className={css.button} type="button" onClick={this.addNeutral}>
          Neutral
        </button>
        <button className={css.button} type="button" onClick={this.addBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad: {this.state.bad}</span>
        <span>Total: {this.countTotalFeedback()}</span>
        <span>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </span>
      </div>
    );
  }
}
