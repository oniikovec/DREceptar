import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import { UserContext } from './contexts/user.context';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import NewRecipeForm from './components/new-recipe-form/new-recipe-form.component';

const App = () => {

  const { currentUser } = useContext(UserContext)
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={currentUser ? <Home /> : <Authentication/>} />
        <Route path='new' element={currentUser ? <NewRecipeForm /> : <Navigate to="/auth" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
