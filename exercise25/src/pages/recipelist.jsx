import { Link } from 'react-router-dom'

export const categories = [
  { id: 'breakfast', name: 'Breakfast', emoji: '☀️', description: 'Easy starts and slow mornings.' },
  { id: 'lunch', name: 'Lunch', emoji: '🥗', description: 'Fresh ideas for the middle of the day.' },
  { id: 'dinner', name: 'Dinner', emoji: '🍲', description: 'Comforting meals to share.' },
  { id: 'dessert', name: 'Dessert', emoji: '🍰', description: 'A little something sweet.' },
]

export const recipes = [
  {
    id: 'lemon-pancakes',
    name: 'Lemon ricotta pancakes',
    category: 'breakfast',
    description: 'Soft, golden pancakes with bright lemon and creamy ricotta.',
    time: 25,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80',
    ingredients: ['1½ cups flour', '1 cup ricotta', '¾ cup milk', '2 eggs', 'Zest of 1 lemon', '2 tsp baking powder', 'Honey and berries'],
    steps: ['Whisk together the flour, sugar and baking powder.', 'Mix ricotta, milk, eggs and lemon zest in another bowl.', 'Fold the wet ingredients into the dry ingredients.', 'Cook small pancakes in a buttered pan until golden on both sides.', 'Serve warm with honey and berries.'],
  },
  {
    id: 'green-grain-bowl',
    name: 'Green goddess grain bowl',
    category: 'lunch',
    description: 'Crisp greens, creamy avocado, warm grains and herby dressing.',
    time: 30,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    ingredients: ['1 cup cooked grains', '1 avocado', '2 cups greens', '1 cucumber', '½ cup yogurt', 'Fresh herbs', '1 lemon'],
    steps: ['Cook the grains and fluff with a fork.', 'Blend yogurt, herbs and lemon into a dressing.', 'Arrange grains, greens, cucumber and avocado in bowls.', 'Spoon the dressing over the bowls and serve.'],
  },
  {
    id: 'somali-bariis',
    name: 'Somali bariis iskukaris',
    category: 'dinner',
    description: 'Fragrant spiced rice with carrots, raisins and warm aromatics.',
    time: 55,
    servings: 6,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80',
    ingredients: ['3 cups basmati rice', '1 onion', '2 carrots', '⅓ cup raisins', '1 cinnamon stick', '4 cardamom pods', '4 cups stock'],
    steps: ['Rinse the rice until the water runs clear.', 'Cook sliced onion in oil until golden, then add the spices.', 'Stir in carrots and raisins, then coat the rice in the fragrant oil.', 'Add warm stock, cover and cook on low until the rice is tender.', 'Rest for 10 minutes, fluff and serve.'],
  },
  {
    id: 'honey-orange-cake',
    name: 'Honey orange tea cake',
    category: 'dessert',
    description: 'A tender orange-scented cake sweetened with golden honey.',
    time: 50,
    servings: 8,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    ingredients: ['1½ cups flour', '⅓ cup honey', '½ cup yogurt', '2 eggs', '⅓ cup olive oil', '1 orange', '1 tsp baking powder'],
    steps: ['Heat the oven to 175°C and line a small loaf tin.', 'Whisk eggs, honey, yogurt and oil until smooth.', 'Fold in flour, baking powder, orange zest and juice.', 'Bake for 35–40 minutes until a skewer comes out clean.', 'Cool before slicing and serving with tea.'],
  },
]

export default function RecipeList({ items = recipes }) {
  if (!items.length) return <p className="empty-state">No recipes here yet. Try another category.</p>

  return (
    <div className="grid recipe-grid">
      {items.map((recipe) => (
        <article className="card recipe-card" key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`} aria-label={`View ${recipe.name}`}>
            <img src={recipe.image} alt="" loading="lazy" />
          </Link>
          <div className="card-body">
            <span className="eyebrow">{recipe.category} · {recipe.time} min</span>
            <h2><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></h2>
            <p>{recipe.description}</p>
            <Link className="text-link" to={`/recipes/${recipe.id}`}>View recipe →</Link>
          </div>
        </article>
      ))}
    </div>
  )
}