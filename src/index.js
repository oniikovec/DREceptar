import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Footer from './components/footer/footer.component'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='app-wrapper-for-footer'>
        <App />
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
