import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/user.context';
import { RecipesProvider } from './contexts/recipes.context';
import './index.css';
import App from './App';
import Footer from './components/footer/footer.component'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RecipesProvider>
          <div className='app-wrapper-only-for-footer-cause-im-stuped'>
            <App />
            <Footer />
          </div>
        </RecipesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
