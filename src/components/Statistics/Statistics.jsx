import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total === 0 ? (
    <Notification message="Sorry, there is no feedback yet..."></Notification>
  ) : (
    <div className={css.wrapper}>
      <div className={css.results}>
        <span className={css.item}>Good: {good}</span>
        <span className={css.item}>Neutral: {neutral}</span>
        <span className={css.item}>Bad: {bad}</span>
        <span className={css.item}>Total: {total}</span>
      </div>
      <span className={css.percentage}>Positive feedback: {positivePercentage}%</span>
    </div>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
