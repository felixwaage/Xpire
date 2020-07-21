import React from 'react';
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { addProduct, deleteProductById, getAllProducts, updateProductById } from './Idb'


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
        this.setState({ products: arr });
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
    let productID
    await addProduct(name, amount, purchaseDate, expireDate, img_url).then((arr) => {
      this.setState({ products: arr });
      productID = arr[arr.length - 1].id
    })
    
    var dateForAlarm = new Date(expireDate)
    dateForAlarm.setDate(dateForAlarm.getDate() - 1);
    dateForAlarm.setHours(9, 0, 0, 0); // 9 o'clock on the day before expiration
    this.scheduleNotification(name + " läuft morgen ab!", "expireAlert:" + productID, dateForAlarm.getTime());
  }

  updateProduct = async (id, product) => {
    await updateProductById(id, product).then((arr) => {
      this.setState({ products: arr });
    })
  }
  scheduleNotification = (text, id, timestamp) => {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.ready.then(registration => {
        if ("showTrigger" in Notification.prototype) { //origin trial feature
          //Notification Trigger feature is supported
          registration.showNotification('Xpire - manage your fridge and get rich', {
            body: text,
            tag: id,
            icon: '/Xpire/static/media/logo.3fb9c233.svg',
            actions: [
              { action: 'show', title: 'Anzeigen' },
              { action: 'remind', title: 'Erinnern' }
            ], // TODO: event listener for onclick must be added somehow
            showTrigger: new TimestampTrigger(timestamp) // eslint-disable-line no-undef
          });
        } else {
          console.log("Notification Triggers not supported")
          registration.showNotification('Xpire - manage your fridge and get rich', {
            body: 'Your Browser doesnt support scheduled notifications',
            tag: 'no-support',
            icon: 'logo.png'
          });
        }
      })
        .then(console.log("Notification sent"))
        .catch(err => console.log(err));
    } else {
      this.displayAlert("Please allow Notifications or exit Incognito Mode");
    }
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
          <Route path="/Xpire" render={(props => <AppHeader refreshPage={this.refreshPage}></AppHeader>)} />
          <Route exact path="/Xpire" render={(props) => <ProductsList ref={this.productListComponentRef} products={this.state.products} showProduct={this.showProduct} />} />
          <Route exact path="/Xpire" render={(props) => <FloatingButton />} />
          <Route exact path="/Xpire/Product" render={(props) => <AddProduct productID={this.state.productID}
            products={this.state.products}
            refreshPage={this.refreshPage}
            add={this.addProductToList}
            delete={this.deleteProduct}
            productUpdate={this.updateProduct} />}
          />
        </div>
      </Router>
    );

  }
}

export default App;