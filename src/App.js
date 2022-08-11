import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          id: 1
        },
        {
          price: 99,
          title: 'Watch',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
          id: 2

        },
        {
          price: 59999,
          title: 'Laptop',
          qty: 2,
          img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
          id: 3

        }
      ]

    }
    //,may go messy if multiple fncs nned to be used, insteda we can used arro function
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.decreaseQuantity = this.decreaseQuantity.bind(this);
    // this.testing();

  }

  handleIncreaseQuantity = (product) => {
    console.log("Please inc the qdty of", product.title);
    // to get the list of products from the updated state
    const { products } = this.state;
    // to get the index of the current product selected
    const index = products.indexOf(product);

    // to increades the quantity of the product whose index is selected
    products[index].qty += 1;

    // to render the increased value to the ui
    this.setState({
      // products: products
      // by short hand as both are same
      products

    })

  }


  handleDecreaseQuantity = (product) => {
    console.log("Please decrease the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // console.log("product is ",product);
    // console.log(index);

    const qty = products[index].qty;

    //        console.log(qty);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products
    })


  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items

    })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;
  }


  getCartTotal = () => {

    const { products } = this.state;

    let value = 0;

    products.map((product) => {
    value +=(product.qty) * (product.price);
  })

  return value;

  }

  render() {
    // we haev to pass porustsc ass well

    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          //
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />

        <div style={{padding: 10 , fontSize: 20, color: 'green'}}>
          TOTAL : {this.getCartTotal()}
        </div>
      </div>


    );
  }
}


export default App;
