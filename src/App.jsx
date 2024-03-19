import { useEffect, useMemo, useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

function App() {
  const initialFeedbackState = useMemo(
    () => ({
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
      positive: 0,
    }),
    []
  );

  const [optionsFeedback, setOptionsFeedback] = useState(initialFeedbackState);

  useEffect(() => {
    const storedFeedback = localStorage.getItem('feedback');
    if (storedFeedback) {
      setOptionsFeedback(JSON.parse(storedFeedback));
    } else {
      setOptionsFeedback(initialFeedbackState);
    }
  }, [initialFeedbackState]);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(optionsFeedback));
  }, [optionsFeedback]);

  const updateFeedback = feedbackType => {
    setOptionsFeedback(prevOptionsFeedback => ({
      ...prevOptionsFeedback,
      [feedbackType]: prevOptionsFeedback[feedbackType] + 1,
      total: prevOptionsFeedback.total + 1,
    }));
  };

  const resetFeedback = () => {
    setOptionsFeedback(initialFeedbackState);
  };

  const totalFeedback =
    optionsFeedback.good + optionsFeedback.neutral + optionsFeedback.bad;
  const positivePercentage = totalFeedback
    ? Math.round(
        ((optionsFeedback.good + optionsFeedback.neutral) / totalFeedback) * 100
      )
    : 0;

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          optionsFeedback={optionsFeedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
          resetFeedback={resetFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
