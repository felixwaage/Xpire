import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdbTest from './IdbTest'
import AppHeader from './components/AppHeader'
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import FloatingButton from './components/FloatingButton';
import ShowProduct from './components/ShowProduct'

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
      productListVisible: true,
      addProductVisible: false,
      showProductVisible: false,
      showProductObj: {}
    };
    this.showAddProduct = this.showAddProduct.bind(this);
    this.showProductList = this.showProductList.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  showAddProduct() {
    this.setState({ addProductVisible: true });
    this.setState({ productListVisible: false });
    this.setState({ showProductVisible: false });
  }

  showProductList() {
    this.setState({ addProductVisible: false });
    this.setState({ productListVisible: true });
    this.setState({ showProductVisible: false });
  }

  showProduct(id) {
    this.setState({ showProductVisible: true });
    this.setState({ addProductVisible: false });
    this.setState({ productListVisible: false });

    var product = products.find(e => e.id === id);
    this.setState({ showProductObj: product });
  }

  deleteProduct(id) {
    var index = products.findIndex(e => e.id === id);
    products.splice(index, 1);
  }

  addProductToList(name, amount, purchase_date, vailid_until) {
    var newProduct = {
      id: Math.random() * 100,
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
        {this.state.addProductVisible && <AddProduct navigate={this.showProductList} add={this.addProductToList} />}
        {this.state.showProductVisible && <ShowProduct navigate={this.showProductList} product={this.state.showProductObj} delete={this.deleteProduct} />}
        {this.state.productListVisible && <ProductsList products={products} showProduct={this.showProduct} />}
        {this.state.productListVisible && <FloatingButton navigate={this.showAddProduct} />}
        <IdbTest></IdbTest>
      </div>
    );

  }
}

export default App;