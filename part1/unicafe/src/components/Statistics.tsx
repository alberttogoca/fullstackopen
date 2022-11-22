import Statistic from './Statistic';

type Props = {
  good: number;
  neutral: number;
  bad: number;
};

export default function Statistics({ good, neutral, bad }: Props): JSX.Element {
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = good * (100 / total);
  const isFeedback = good || neutral || bad;
  return (
    <>
      {isFeedback ? (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="total" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
          </tbody>
        </table>
      ) : (
        <p>No feedback given.</p>
      )}
    </>
  );
}
