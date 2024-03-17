import { useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

function App() {
  const [counter, setCounter] = useState(0);
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  });

  const handleLogOption = optionName => {
    console.log('optionName: ', optionName);
    setOptions({ ...options, [optionName]: options[optionName] + 1 });
  };
  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  const optionsTotal = options.good + options.neutral + options.bad;
  return (
    <>
      <button onClick={handleIncrementCounter}>Counter: {counter}</button>
      <button onClick={handleDecrementCounter}>-</button>
      <Description />
      <Options handleLogOption={handleLogOption} />
      <Feedback options={options} total={optionsTotal} />
    </>
  );
}

export default App;
