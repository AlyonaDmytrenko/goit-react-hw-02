const Feedback = ({ options, total }) => {
  return (
    <ul>
      <li>Good: {options.good}</li>
      <li>Neutral: {options.neutral}</li>
      <li>Bad: {options.bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {options.positive}</li>
    </ul>
  );
};

export default Feedback;
