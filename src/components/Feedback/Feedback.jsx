const Feedback = ({ optionsFeedback, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      <li>Good: {optionsFeedback.good}</li>
      <li>Neutral: {optionsFeedback.neutral}</li>
      <li>Bad: {optionsFeedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positivePercentage}%</li>
    </ul>
  );
};

export default Feedback;
