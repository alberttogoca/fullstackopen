type Props = {
  text: string;
  value: number;
};

export default function Statistic({ text, value }: Props): JSX.Element {
  return (
    <>
      <tr>
        <td>
          {text}: {value} {text === 'positive' && '%'}
        </td>
      </tr>
    </>
  );
}
