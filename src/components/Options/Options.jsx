const Options = ({ handleLogOption }) => {
  return (
    <div>
      <button onClick={() => handleLogOption('good')}>Good</button>
      <button onClick={() => handleLogOption('neutral')}>Neutral</button>
      <button onClick={() => handleLogOption('bad')}>Bad</button>
      <button onClick={() => handleLogOption('reset')}>Reset</button>
    </div>
  );
};

export default Options;
