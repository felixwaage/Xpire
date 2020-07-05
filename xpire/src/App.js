import React from 'react';
//import IdbTest from './IdbTest'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import { Route, BrowserRouter as Router } from 'react-router-dom'; 
import { addProduct, deleteProductById, getAllProducts, updateProductById } from './Idb'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productID: 0,
    }
    this.showProduct = this.showProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProductToList = this.addProductToList.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    const fetch = async () => {
      await getAllProducts().then((arr) => {
        this.setState({ products: arr}); 
      })
  }
  fetch();
  }

  refreshPage() {
    this.setState({ productID: 0 });
    this.componentDidMount();
  }

  showProduct(id) {
    this.setState({ productID: id });
  }

  deleteProduct = async (id) => {
    await deleteProductById(id)
  }

  addProductToList = async (name, amount, purchaseDate, expireDate, img_url) => {
    await addProduct(name, amount, purchaseDate, expireDate, img_url).then((arr) => {
      this.setState({ products: arr });
    })
  }

  updateProduct = async (id,product) => {
    await updateProductById(id, product).then((arr) => {
      this.setState({ products: arr });
    })
  }

  render() {

    return (
      <Router>
        <div className="App"> 
          <Route path="/Xpire" component={AppHeader} />
          <Route exact path="/Xpire" render={(props) => <ProductsList products={this.state.products} showProduct={this.showProduct}/>} />
          <Route exact path="/Xpire" render={(props) => <FloatingButton />} />
          <Route exact path="/Xpire/Product" render={(props) => <AddProduct productID={this.state.productID}
                                                                            products={this.state.products} 
                                                                            refreshPage={this.refreshPage} 
                                                                            add={this.addProductToList} 
                                                                            delete={this.deleteProduct} 
                                                                            productUpdate={this.updateProduct}/>} 
                                                                />
        </div>
      </Router>
    );

  }
}

export default App;