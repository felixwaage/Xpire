import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idb, { addProduct, deleteProduct } from './Idb'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';

function App() {

  return (
    <div className="App">
      <AppHeader />
      <ProductsList />
      {/* <Idb></Idb> */}
    </div>
  );
}

export default App;