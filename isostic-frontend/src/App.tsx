import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/css/index.css';
import Navbar from './Screens/Navbar';
import Favorites from './Screens/Favorites';
import ShoppingCart from './Screens/ShoppingCart';
import Budgets from './Screens/Budgets';
import AboutUs from './Screens/AboutUs';
import HomeScreen from './Screens/HomeScreen';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={< HomeScreen />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/budget' element={<Budgets />} />
                    <Route path='/aboutUs' element={<AboutUs />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
