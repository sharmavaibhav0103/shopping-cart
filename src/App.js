import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom"
import Productlist from './components/Productlist';
import Details from './components/Details';
import Product from './components/Product';
import Cart from './components/Cart'
import Default from './components/Default';
import Homepage from './components/Homepage'
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Router>
       <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/list" component={Productlist} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/product" component={Product} />
          <Route path="/default" component={Default} />
        </Switch>
        <Modal />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
