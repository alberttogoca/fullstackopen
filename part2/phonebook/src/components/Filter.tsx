import { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Filter({ value, onChange }: Props): JSX.Element {
  return (
    <form>
      <div>
        Filter shown with: <input value={value} onChange={onChange} />
      </div>
    </form>
  );
}
