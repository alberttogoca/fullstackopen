type Props = {
  anecdote: string;
  points: number;
};

export default function Anecdote({ anecdote, points }: Props): JSX.Element {
  return (
    <>
      <h2>{anecdote}</h2>
      <h2>♥ {points}</h2>
    </>
  );
}
