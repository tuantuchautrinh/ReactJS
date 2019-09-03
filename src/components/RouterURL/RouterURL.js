import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';

class RouterURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/san-pham" component={Product} />
                <Route path="/lien-he" component={Contact} />
                <Route path="" component={Home} />
            </Switch>
        );
    }
}

export default RouterURL;