import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { UserContext } from './contexts/user.context';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import NewRecipeForm from './routes/new-recipe-form/new-recipe-form.component';
import Recipe from './routes/recipe/recipe.component';

const App = () => {

  const { currentUser } = useContext(UserContext)
  if (currentUser === undefined) return null;
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={currentUser ? <Navigate to='/' replace /> : <Authentication />} />
        <Route path='new' element={currentUser && <NewRecipeForm />} />
        <Route path=':recipe' element={<Recipe />} />
      </Route>
    </Routes>
  );
}

export default App;
