import { NavLink, Route, Routes } from 'react-router-dom'
import Categories from './pages/categories.jsx'
import CategoryRecipes from './pages/categoryrecipes.jsx'
import Home from './pages/home.jsx'
import NotFound from './pages/notfound.jsx'
import RecipeDetail from './pages/recipedetail.jsx'
import RecipeList from './pages/recipelist.jsx'

function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="Saffron and Sage home">
          Saffron <span>&amp;</span> Sage
        </NavLink>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/recipes">Recipes</NavLink>
        </nav>
        <NavLink className="header-link" to="/recipes">Find a recipe <span aria-hidden="true">↗</span></NavLink>
      </header>
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<CategoryRecipes />} />
          <Route path="/recipes" element={<RecipeList />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <strong>Saffron &amp; Sage</strong>
        <span>Good food, made for sharing.</span>
      </footer>
    </div>
  )
}

export default function App() {
  return <AppLayout />
}
