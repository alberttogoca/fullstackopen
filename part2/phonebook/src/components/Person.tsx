type Props = {
  person: { name: string; tel: string; id: number };
};

export default function Person({ person }: Props): JSX.Element {
  return (
    <div>
      {person.name} {person.tel}
    </div>
  );
}
