import '../globals.css'

export default function TodoLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <section>
      <h1>TODO</h1>
      <div>{children}</div>
    </section>
  )
}
