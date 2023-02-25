import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
import clsx from "clsx"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.wrapper}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={clsx(css.button, css[option.toLowerCase()])}
        value={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
