type Props = {
  exercises: number[];
};

export default function Total({ exercises }: Props): JSX.Element {
  const total = exercises.reduce((sum, element) => sum + element, 0);

  return (
    <>
      <p>
        <b>Total of {total} exercises</b>
      </p>
    </>
  );
}
