import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total === 0 ? (
    <Notification message="Sorry, there is no feedback yet..."></Notification>
  ) : (
    <div>
      <span>Good: {good}</span>
      <span>Neutral: {neutral}</span>
      <span>Bad: {bad}</span>
      <span>Total: {total}</span>
      <span>Positive feedback: {positivePercentage}%</span>
    </div>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
