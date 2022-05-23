import React from 'react';
import './App.css';
import ProductList from './Screens/ProductList';
import '../src/css/index.css';

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
