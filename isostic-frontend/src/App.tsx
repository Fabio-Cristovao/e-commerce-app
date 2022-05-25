import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/css/index.css';
import Navbar from './Screens/Navbar';
import ShoppingCart from './Screens/ShoppingCart';
import Budgets from './Screens/Budgets';
import AboutUs from './Screens/AboutUs';
import Home from './Screens/Home';
import ProductList from './Screens/ProductList';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/products' element={<ProductList />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                    <Route path='/budget' element={<Budgets />} />
                    <Route path='/aboutUs' element={<AboutUs />} />
                </Routes>
            </Router>

        </>
    );
}

export default App;
