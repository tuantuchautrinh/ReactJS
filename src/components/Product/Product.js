import React, { Component } from 'react';

class Product extends Component {
    render() {
        console.log(this.props);

        return (
            <div className="col-xs-12 col-md-6">
                {/* First product box start here*/}
                <div className="prod-info-main prod-wrap clearfix">
                    <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="product-image"> 
                                <img src="images/products/p4.png" alt="" className="img-responsive" /> 
                                <span className="tag2 hot">
                                    HOT
                                </span> 
                            </div>
                        </div>
                        <div className="col-md-7 col-sm-12 col-xs-12">
                            <div className="product-deatil">
                                <h5 className="name">
                                    <a href="">
                                        Product Code/Name here
                                    </a>
                                    <a href="">
                                        <span>Product Category</span>
                                    </a>                            
                                </h5>
                                <p className="price-container">
                                    <span>$199</span>
                                </p>
                                <span className="tag1" /> 
                            </div>
                            <div className="description">
                                <p>A Short product description here </p>
                            </div>
                            <div className="product-info smart-form">
                                <div className="row">
                                    <div className="col-md-12"> 
                                        <a data-toggle="modal" data-target="#myModal" className="btn btn-danger">Add to cart</a>
                                        <a data-toggle="modal" data-target="#myModal" className="btn btn-info">More info</a>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="rating">Rating:
                                            <label htmlFor="stars-rating-5"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-4"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-3"><i className="fa fa-star text-danger" /></label>
                                            <label htmlFor="stars-rating-2"><i className="fa fa-star text-warning" /></label>
                                            <label htmlFor="stars-rating-1"><i className="fa fa-star text-warning" /></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end product */}
            </div>
        );
    }
}

export default Product;