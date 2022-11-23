import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const DEFAULT_PERSONS = [
  { name: 'Arto Hellas', tel: '040-123456', id: 1 },
  { name: 'Ada Lovelace', tel: '39-44-5323523', id: 2 },
  { name: 'Dan Abramov', tel: '12-43-234345', id: 3 },
  { name: 'Mary Poppendieck', tel: '39-23-6423122', id: 4 },
];

export default function App(): JSX.Element {
  const [persons, setPersons] = useState(DEFAULT_PERSONS);
  const [newName, setNewName] = useState('');
  const [newTel, setNewTel] = useState('');
  const [filter, setFilter] = useState('');
  const personsToShow =
    filter === '' ? persons : persons.filter((person) => person.name.toLowerCase().startsWith(filter.toLowerCase()));

  const addPerson = (event: SyntheticEvent) => {
    event.preventDefault();
    const personFinded = persons.find((person) => person.name === newName);
    if (personFinded) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, tel: newTel, id: persons.length + 1 };
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewTel('');
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setNewName(target.value);
  };

  const handleTelChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setNewTel(target.value);
  };

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    setFilter(target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />

      <h2>New Contact</h2>
      <PersonForm
        nameValue={newName}
        telValue={newTel}
        onChangeName={handleNameChange}
        onChangeTel={handleTelChange}
        onClick={addPerson}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </>
  );
}
