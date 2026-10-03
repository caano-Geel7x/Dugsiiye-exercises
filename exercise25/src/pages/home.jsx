import { Link } from 'react-router-dom'
import RecipeList, { recipes } from './recipelist.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <span className="eyebrow">A LITTLE SOMETHING DELICIOUS</span>
        <h1>Good food.<br /><em>Good company.</em></h1>
        <p>Find simple, feel-good recipes for slow mornings and shared tables.</p>
        <Link className="button" to="/recipes">Browse recipes →</Link>
      </section>
      <section>
        <div className="section-heading">
          <div><span className="eyebrow">FROM OUR KITCHEN</span><h2>Something to try</h2></div>
          <Link to="/categories">All categories →</Link>
        </div>
        <RecipeList items={recipes.slice(0, 3)} />
      </section>
    </>
  )
}