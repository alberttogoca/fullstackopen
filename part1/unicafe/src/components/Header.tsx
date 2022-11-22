type Props = {
  title: string;
};

export default function Statistic({ title }: Props): JSX.Element {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
