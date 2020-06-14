import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idb from './Idb'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';

var products = [{
    id: "1",
    name: "Pizza",
    amount: 1,
    purchase_date: "2020-06-14",
    vailid_until: "2021-09-12"
  },
  {
    id: "2",
    name: "Döner",
    amount: 1,
    purchase_date: "2020-06-14",
    vailid_until: "2021-09-12"
  },
  {
    id: "3",
    name: "Fisch",
    amount: 1,
    purchase_date: "2020-06-14",
    vailid_until: "2021-09-12"
  }
];

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

  addProductToList(name,amount,purchase_date,vailid_until){
    var newProduct = {
      id: Math.random()*100,
      name,
      amount,
      purchase_date,
      vailid_until
    }

    products.push(newProduct);
  }

  render() {

    return (
      <div className="App"> 
        <AppHeader /> 
        {this.state.addProduct && <AddProduct navigate={this.showProductList} add={this.addProductToList}/> }
        {!this.state.addProduct && <ProductsList products={products} />}
        {!this.state.addProduct && <FloatingButton navigate={this.showAddProduct}/>}
      
      </div>
    );
    
  }
}

export default App;