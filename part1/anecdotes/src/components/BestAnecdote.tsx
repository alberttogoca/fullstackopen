import Anecdote from './Anecdote';

type Props = {
  anecdotes: string[];
  points: number[];
};

export default function BestAnecdote({ anecdotes, points }: Props): JSX.Element {
  const max = points.reduce((a, b) => Math.max(a, b), -Infinity);
  const mostVoted = points.indexOf(max);

  return (
    <>
      {max > 0 ? <Anecdote anecdote={anecdotes[mostVoted]} points={points[mostVoted]} /> : <h2>No votes yet :&#40;</h2>}
    </>
  );
}
