import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404 · NOT ON THE MENU</span>
      <h1>We lost the recipe.</h1>
      <p>That page doesn’t seem to be here. Let’s find you something else.</p>
      <Link className="button" to="/">Back home →</Link>
    </section>
  )
}