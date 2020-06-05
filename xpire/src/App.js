import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idb from './Idb'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <ProductsList />
    </div>
  );
}

export default App;
