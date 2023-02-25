import React from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import css from './App.module.css'

export default class App extends React.Component {
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

  addFeedback = event => {
    switch (event.target.value) {
      case 'Good':
        this.setState(prevState => ({
          good: prevState.good + 1,
        }));
        break;

      case 'Neutral':
        this.setState(prevState => ({
          neutral: prevState.neutral + 1,
        }));
        break;

      case 'Bad':
        this.setState(prevState => ({
          bad: prevState.bad + 1,
        }));
        break;

      default:
        return;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <div className={css.wrapper}>
        <Section title="Please, leave feedback!">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
