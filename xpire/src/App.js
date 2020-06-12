import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idb from './Idb'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addProduct: false,
    };
    this.showAddProduct = this.showAddProduct.bind(this);
    this.showProductList = this.showProductList.bind(this);
  }

  showAddProduct() {
    this.setState({ addProduct: true });
  }

  showProductList() {
    this.setState({ addProduct: false });
  }

  render() {

    return (
      <div className="App"> 
        <AppHeader /> 
        {this.state.addProduct && <AddProduct navigate={this.showProductList}/> }
        {!this.state.addProduct && <ProductsList />}
        {!this.state.addProduct && <FloatingButton navigate={this.showAddProduct}/>}
      
      </div>
    );
    
  }
}

export default App;