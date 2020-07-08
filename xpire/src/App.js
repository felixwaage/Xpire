import React from 'react';
//import IdbTest from './IdbTest'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import { Route, BrowserRouter as Router } from 'react-router-dom'; 
import { addProduct, deleteProductById, getAllProducts, updateProductById } from './Idb'
import { Collapse, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';


class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.productListComponentRef = React.createRef()

    this.state = {
      products: [],
      productID: 0,
      open: true
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

  scheduleNotification = (text, id, timestamp) => {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.ready.then(registration => {
        if ("showTrigger" in Notification.prototype) { //origin trial feature
          console.log("Notification Triggers supported");
          registration.showNotification('Xpire - manage your fridge and get rich', {
            body: text,
            tag: id,
            icon: 'logo.svg',
            showTrigger: new TimestampTrigger(timestamp) // eslint-disable-line no-undef
          });
        }else{
          console.log("Notification Triggers not supported")
          registration.showNotification('Xpire - manage your fridge and get rich', {
            body: 'Your Browser doesnt support scheduled notifications',
            tag: 'no-support',
            icon: 'logo.svg'
          });
        }
      })
      .then(console.log("Notification sent"))
      .catch(err => console.log(err));
    }else {
      this.displayAlert("Please allow Notifications or exit Incognito Mode");
    }
  }
  displayNotification = () => {
    console.log("sending Notification")
    this.scheduleNotification("a product is about to expire", "test1", Date.now() + 2000);
    this.scheduleNotification("another schimmel", "test2", Date.now() + 5000);
  }

  displayAlert = (text) => {
    this.productListComponentRef.current.setState({
      alertOpen: true, 
      alertText: text
    });
  }

  render() {

    return (
      <Router>
        <div className="App"> 
          <Route path="/Xpire" component={AppHeader} />
          <Route exact path="/Xpire" render={(props) => <ProductsList ref= {this.productListComponentRef} products={this.state.products} showProduct={this.showProduct} notification={this.displayNotification}/>} />
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