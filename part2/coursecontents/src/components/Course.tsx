import Content from './Content';
import Header from './Header';
import Total from './Total';

type Props = {
  course: {
    id: number;
    name: string;
    parts: {
      name: string;
      exercises: number;
      id: number;
    }[];
  };
};

export default function Course({ course }: Props): JSX.Element {
  const exercises = course.parts.map((part) => part.exercises);
  return (
    <>
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total exercises={exercises} />
      </div>
    </>
  );
}
