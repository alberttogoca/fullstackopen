import { useState } from 'react';

import Anecdote from './components/Anecdote';
import BestAnecdote from './components/BestAnecdote';
import Button from './components/FeedbackButton';
import Header from './components/Header';

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

export default function App(): JSX.Element {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const newAnecdote = (): void => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteAnecdote = (): void => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  return (
    <>
      <Header title={'Anecdote of the day'} />
      <Anecdote anecdote={anecdotes[selected]} points={points[selected]} />
      <Button onClick={newAnecdote} text={'Another 🤣'} />
      <Button onClick={voteAnecdote} text={'❤'} />

      <Header title={'Anecdote with most votes'} />
      <BestAnecdote anecdotes={anecdotes} points={points} />
    </>
  );
}
