import { Link } from 'react-router-dom'
import { categories, recipes } from './recipelist.jsx'

export default function Categories() {
  return (
    <section>
      <h1>Recipe categories</h1>
      <p className="intro">Pick a collection and find something lovely to cook.</p>
      <div className="grid">
        {categories.map((category) => (
          <Link className="card category-card" to={`/categories/${category.id}`} key={category.id}>
            <span className="emoji">{category.emoji}</span>
            <h2>{category.name}</h2>
            <p>{category.description}</p>
            <small>{recipes.filter((recipe) => recipe.category === category.id).length} recipes →</small>
          </Link>
        ))}
      </div>
    </section>
  )
}