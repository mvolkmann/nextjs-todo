import '../globals.css';

type Props = { children: React.ReactNode };

export default function TodoLayout({ children }: Props) {
  return (
    <section>
      <h2>Todos Page</h2>
      <div>{children}</div>
    </section>
  );
}
