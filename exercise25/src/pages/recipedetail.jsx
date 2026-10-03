import { Link, useParams } from 'react-router-dom'
import { recipes } from './recipelist.jsx'
import NotFound from './notfound.jsx'

export default function RecipeDetail() {
  const { recipeId } = useParams()
  const recipe = recipes.find((item) => item.id === recipeId)

  if (!recipe) return <NotFound />

  return (
    <article className="recipe-detail">
      <Link className="back-link" to="/recipes">← All recipes</Link>
      <img className="detail-image" src={recipe.image} alt={recipe.name} />
      <span className="eyebrow">{recipe.category} · {recipe.time} minutes · {recipe.servings} servings</span>
      <h1>{recipe.name}</h1>
      <p className="intro">{recipe.description}</p>
      <div className="detail-columns">
        <section>
          <h2>Ingredients</h2>
          <ul>{recipe.ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>Method</h2>
          <ol>{recipe.steps.map((step, index) => <li key={step}><strong>{index + 1}.</strong> {step}</li>)}</ol>
        </section>
      </div>
    </article>
  )
}