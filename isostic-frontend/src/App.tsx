import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className='App'>
            <h1 className='text-3x1 font-bold underline text-red-600'>
                <ProductList />
            </h1>
        </div>
    );
}

export default App;
