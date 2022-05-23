import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';
import App from './App';
import Favorites from './Screens/Favorites';
import ShoppingCart from './Screens/ShoppingCart';
import Budgets from './Screens/Budgets';
import AboutUs from './Screens/AboutUs';
import HomeScreen from './Screens/HomeScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={< App />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/budget' element={<Budgets />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
