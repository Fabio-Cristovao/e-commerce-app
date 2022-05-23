import React from 'react';
import './App.css';
import ProductList from './Screens/ProductList';
import '../src/css/index.css';
import Navbar from './Screens/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <div className='flex flex-col align-center'>
                <h1 className='text-center text-3xl my-6'>Product List</h1>
                <ProductList />
            </div>
        </>
    );
}

export default App;
