import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import RecipeList from './pages/recipelist';
import RecipeDetail from './pages/recipedetail';
import Categories from './pages/categories';
import CategoryRecipes from './pages/categoryrecipes';
import NotFound from './pages/notfound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recipes',
        element: <RecipeList />,
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetail />,
      },
      {
        path: 'categories',
        element: <Categories />,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes />,
          },
        ],
      },
    ],
  },
]); 