import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>Out of luck today!</h2>
      <Link href="/todos">
        <span className="button">Back to List</span>
      </Link>
    </div>
  )
}
