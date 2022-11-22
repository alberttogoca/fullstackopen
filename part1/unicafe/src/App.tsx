import { useState } from 'react';

import FeedbackButton from './components/FeedbackButton';
import Header from './components/Header';
import Statistics from './components/Statistics';

export default function App(): JSX.Element {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = (): void => {
    setGood((good) => good + 1);
  };

  const increaseNeutral = (): void => {
    setNeutral((neutral) => neutral + 1);
  };
  const increaseBad = (): void => {
    setBad((bad) => bad + 1);
  };

  return (
    <>
      <Header title={'Give feedback!'} />
      <FeedbackButton onClick={increaseGood} text={'good'} />
      <FeedbackButton onClick={increaseNeutral} text={'neutral'} />
      <FeedbackButton onClick={increaseBad} text={'bad'} />

      <Header title={'Statistics'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}
