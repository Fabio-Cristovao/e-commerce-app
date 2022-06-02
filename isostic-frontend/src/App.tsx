import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/css/index.css';
import Navbar from './Screens/Navbar';
import ShoppingCart from './Screens/ShoppingCart';
import Budgets from './Screens/Budgets';
import Home from './Screens/Home';
import ProductList from './Screens/ProductList';
import Footer from './components/Footer';
import Contacts from './Screens/Contacts';
import Auth from './Screens/Auth';
import ProductDetail from './Screens/ProductDetail';
import { AuthProvider } from './contexts/Auth/AuthProvider';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="container m-w6xl mx-auto">
                    <Routes>
                        <Route path='/' element={< Home />} />
                        <Route path='/products' element={<ProductList />} />
                        <Route path='/products/:id' element={<ProductDetail />} />
                        <Route path='/cart' element={<ShoppingCart />} />
                        <Route path='/budgets' element={<Budgets />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/auth' element={<><Login /></>} />
                    </Routes>
                    <Footer />
                </div >
            </Router>
        </AuthProvider>
    );
}

export default App;
