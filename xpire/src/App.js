import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idb, { addProduct, deleteProduct } from './Idb'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import ShowProduct from './components/ShowProduct'
import { Route, BrowserRouter as Router } from 'react-router-dom'; 

var products = [{
    id: 1,
    name: "Pizza",
    amount: 1,
    purchase_date: "2020-06-14",
    vailid_until: "2020-09-12"
  },
  {
    id: 2,
    name: "Döner",
    amount: 1,
    purchase_date: "2020-06-14",
    vailid_until: "2022-03-15"
  },
  {
    id: 3,
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
      showProductObj: {}
    };
    this.showProduct = this.showProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  showProduct(id){
    var product = products.find(e => e.id === id);
    this.setState({ showProductObj: product });
  }

  deleteProduct(id){
    var index = products.findIndex(e => e.id === id);
    products.splice(index,1);
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
      <Router>
        <div className="App"> 
          <Route path="/" component={AppHeader} />
          <Route exact path="/" render={(props) => <ProductsList products={products} showProduct={this.showProduct}/>} />
          <Route exact path="/" render={(props) => <FloatingButton />} />
          <Route exact path="/addProduct" render={(props) => <AddProduct add={this.addProductToList}/>} />
          <Route exact path="/showProduct" render={(props) => <ShowProduct product={this.state.showProductObj} delete={this.deleteProduct}/>} />
        </div>
      </Router>
    );
    
  }
}

export default App;