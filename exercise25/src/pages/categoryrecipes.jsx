import { Link, useParams } from 'react-router-dom'
import RecipeList, { categories, recipes } from './recipelist.jsx'

export default function CategoryRecipes() {
  const { categoryId } = useParams()
  const category = categories.find((item) => item.id === categoryId)

  if (!category) {
    return <section><h1>Category not found</h1><Link to="/categories">Browse categories →</Link></section>
  }

  const filteredRecipes = recipes.filter((recipe) => recipe.category === category.id)

  return (
    <section>
      <Link className="back-link" to="/categories">← All categories</Link>
      <h1>{category.emoji} {category.name}</h1>
      <p className="intro">{category.description}</p>
      <RecipeList items={filteredRecipes} />
    </section>
  )
}