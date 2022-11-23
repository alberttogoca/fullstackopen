import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

export default function App(): JSX.Element {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <div>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts.map((i) => i.exercises)} />
      </div>
    </>
  );
}
