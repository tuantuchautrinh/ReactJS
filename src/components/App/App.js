import React, { Component } from 'react';
import './App.css';
import Product from '../Product/Product';
import Modal from '../Modal/Modal';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products :  [
                    {
                      name 	: "Laptop Asus",
                      price 	: "10000000",
                      images 	: "/images/products/p1.png",
                      hot 	: true
                    },
                    {
                      name 	: "Điện Thoại Asus",
                      price 	: "40000000",
                      images 	: "/images/products/p2.png",
                      hot 	: false
                    },
                    {
                      name 	: "Điện Thoại iPhone X",
                      price 	: "55000000",
                      images 	: "/images/products/p3.png",
                      hot 	: true
                    },
                    {
                      name 	: "Macbook",
                      price 	: "55000000",
                      images 	: "/images/products/p4.png",
                      hot 	: true
                    },
                    {
                      name 	: "Laptop HP",
                      price 	: "96000000",
                      images 	: "/images/products/p4.png",
                      hot 	: false
                    },
                    {
                      name 	: "Laptop Lenovo",
                      price 	: "26000000",
                      images 	: "/images/products/p3.png",
                      hot 	: true
                    }
      ]
    };
  }

  show_product = () => {
    const listProduct = this.state.products.map((item) =>
      <Product price={ item.price } images={ item.images } hot={true}>{ item.name }</Product>
    );

    return listProduct;
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          { this.show_product() }
        </div>

        <Modal />
      </div>
    );
  }
}

export default App;