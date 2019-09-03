import React, { Component } from 'react';
import Item from './Item';

class Product extends Component {
    render() {
        return (
            <div id="products" className="row list-group">
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình ASP</Item>
                <Item>Lập Trình Java</Item>
                <Item>Lập Trình Python</Item>
                <Item>Lập Trình Android</Item>
                <Item>Lập Trình Angular</Item>
            </div>
        );
    }
}

export default Product;