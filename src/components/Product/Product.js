import React, { Component } from 'react';
import Item from './Item';

class Product extends Component {
    render() {
        return (
            <div id="products" className="row list-group">
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình PHP</Item>
                <Item>Lập Trình PHP</Item>
            </div>
        );
    }
}

export default Product;