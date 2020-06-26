import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdbTest from './IdbTest'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import { Route, BrowserRouter as Router } from 'react-router-dom'; 

var products = [{
  id: 1,
  name: "Pizza",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2020-09-12",
  img_url: "https://static.openfoodfacts.org/images/products/400/172/481/9806/front_de.30.full.jpg"
},
{
  id: 2,
  name: "Döner",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2022-03-15",
  img_url: "https://static.openfoodfacts.org/images/products/426/038/066/1260/front_de.32.full.jpg"
},
{
  id: 4,
  name: "Wurst",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2020-06-22",
  img_url: "https://static.openfoodfacts.org/images/products/401/237/166/1809/front_de.4.400.jpg"
},
{
  id: 5,
  name: "Erdbeerkäse",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2020-06-27",
  img_url: "https://static.openfoodfacts.org/images/products/20082857/front_de.11.400.jpg"
},
{
  id: 6,
  name: "Käse",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2020-06-29",
  img_url: "https://static.openfoodfacts.org/images/products/20082703/front_de.18.400.jpg"
},
{
  id: 7,
  name: "Kaviar",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2020-06-26",
  img_url: "https://static.openfoodfacts.org/images/products/426/005/107/5778/front_de.7.400.jpg"
},
{
  id: 3,
  name: "Fisch",
  amount: 1,
  purchase_date: "2020-06-14",
  vailid_until: "2021-09-12",
  img_url: "https://static.openfoodfacts.org/images/products/20375942/front_de.23.400.jpg"
},
];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.showProduct = this.showProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  getInitialState = () => ({
    showProductObj: {}
  })

  resetState = () => {
     this.setState(this.getInitialState());
  }


  showProduct(id) {
    var product = products.find(e => e.id === id);
    this.setState({ showProductObj: product });
  }

  deleteProduct(id) {
    var index = products.findIndex(e => e.id === id);
    products.splice(index, 1);
  }

  addProductToList(name, amount, purchase_date, vailid_until,img_url) {
    var newProduct = {
      id: Math.random() * 100,
      name,
      amount,
      purchase_date,
      vailid_until,
      img_url
    }

    products.push(newProduct);
  }

  render() {

    return (
      <Router>
        <div className="App"> 
          <Route path="/Xpire" component={AppHeader} />
          <Route exact path="/Xpire" render={(props) => <ProductsList products={products} showProduct={this.showProduct}/>} />
          <Route exact path="/Xpire" render={(props) => <FloatingButton />} />
          <Route exact path="/Xpire/Product" render={(props) => <AddProduct add={this.addProductToList} product={this.state.showProductObj} delete={this.deleteProduct} reset={this.resetState}/>} />
          <Route path="/Xpire" component={IdbTest} />
        </div>
      </Router>
      
    );

  }
}

export default App;