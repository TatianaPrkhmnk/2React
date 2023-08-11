// Statistics.js
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
//   const total = good + neutral + bad;
//   const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div>
      <h2>Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
