import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdbTest from './IdbTest'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import { Route, BrowserRouter as Router } from 'react-router-dom'; 
import { addProduct, deleteProductById, getAllProducts } from './Idb'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.showProduct = this.showProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.resetState = this.resetState.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount = () => {
    const fetch = async () => {
      await getAllProducts().then((arr) => {
        this.setState({ products: arr}); 
      })
  }
  fetch();
  }

  getInitialState = () => ({
    products: [],
    showProductObj: {}
  })

  // Check function if necessary!!
  updateState = (value) => {
    this.setState({ showProductObj : value}); 
  }

  resetState = () => {
     this.setState(this.getInitialState());
     this.componentDidMount();
  }

  showProduct(id) {
    var product = this.state.products.find(e => e.id === id);
    this.setState({ showProductObj: product });
  }

  deleteProduct = async (id) => {
    await deleteProductById(id)
  }

  addProductToList = async (name, amount, purchaseDate, expireDate, img_url) => {
    await addProduct(name, amount, purchaseDate, expireDate).then((arr) => {
      this.setState({ products: arr});
    })
  }

  render() {

    return (
      <Router>
        <div className="App"> 
          <Route path="/Xpire" component={AppHeader} />
          <Route exact path="/Xpire" render={(props) => <ProductsList products={this.state.products} showProduct={this.showProduct}/>} />
          <Route exact path="/Xpire" render={(props) => <FloatingButton />} />
          <Route exact path="/Xpire/Product" render={(props) => <AddProduct add={this.addProductToList} 
                                                                            product={this.state.showProductObj} 
                                                                            delete={this.deleteProduct} 
                                                                            update={this.updateState}
                                                                            reset={this.resetState}/>} 
                                                                />
        </div>
      </Router>
      
    );

  }
}

export default App;