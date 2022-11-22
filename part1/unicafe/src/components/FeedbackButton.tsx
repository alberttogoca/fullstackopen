type Props = {
  onClick: () => void;
  text: string;
};

export default function FeedbackButton({ onClick, text }: Props): JSX.Element {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
