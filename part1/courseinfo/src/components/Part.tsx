type Props = {
  part: { name: string; exercises: number };
};

export default function Part({ part }: Props): JSX.Element {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
}
