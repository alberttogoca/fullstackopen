import Person from './Person';

type Props = {
  persons: { name: string; tel: string; id: number }[];
};

export default function Persons({ persons }: Props): JSX.Element {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
}
