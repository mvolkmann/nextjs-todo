import '../globals.css'

export default function TodoLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <section>
      <h1>Next.js Todo App</h1>
      <div>{children}</div>
    </section>
  )
}
