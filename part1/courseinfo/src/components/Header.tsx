type Props = {
  title: string;
};

export default function Header({ title }: Props): JSX.Element {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
