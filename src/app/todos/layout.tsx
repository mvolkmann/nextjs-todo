import '../globals.css'

export default function TodoLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <section>
      <h2>Todos Page</h2>
      <div>{children}</div>
    </section>
  )
}
