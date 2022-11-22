type Props = {
  onClick: () => void;
  text: string;
};

export default function Button({ onClick, text }: Props): JSX.Element {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
