import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import '../src/index.css'

function App() {
    return (
        <div className='App'>
            <h1>
                <ProductList />
            </h1>
        </div>
    );
}

export default App;
