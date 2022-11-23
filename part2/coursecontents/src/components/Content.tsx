import Part from './Part';

type Props = {
  parts: { name: string; exercises: number; id: number }[];
};

export default function Content({ parts }: Props): JSX.Element {
  return (
    <>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </>
  );
}
