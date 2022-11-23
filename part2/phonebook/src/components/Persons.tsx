import React from 'react';
import Person from './Person';

type Props = {
  persons: { name: string; tel: string; id: number }[];
};

export default function Persons({ persons }: Props) {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </>
  );
}
