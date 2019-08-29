import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div id="menu">
                <ul>
                    <li><a href="#" title>Trang Chủ</a></li>
                    <li><a href="#" title>Giới Thiệu</a></li>
                    <li><a href="#" title>Sản Phẩm</a></li>
                    <li><a href="#" title>Tin Tức</a></li>
                    <li><a href="#" title>Liên Hệ</a></li>
                </ul>
            </div>
        );
    }
}

export default Menu;