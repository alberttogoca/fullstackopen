import { ChangeEvent, SyntheticEvent } from 'react';

type Props = {
  nameValue: string;
  telValue: string;
  onChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTel: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: SyntheticEvent) => void;
};

export default function PersonForm({ nameValue, telValue, onChangeName, onChangeTel, onClick }: Props): JSX.Element {
  return (
    <form>
      <div>
        Name: <input value={nameValue} onChange={onChangeName} />
      </div>
      <div>
        Number: <input value={telValue} onChange={onChangeTel} />
      </div>
      <div>
        <button type="submit" onClick={onClick}>
          Add
        </button>
      </div>
    </form>
  );
}
