import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-fixed">
                <Link to="/" className="navbar-brand">
                <img src="https://i.postimg.cc/4yKHcDXb/apple.png" alt="logo" style={{width:"30px"}}/>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item text-white">
                    <Link to="/list" className="text-white mx-3 hov" style={{fontWeight:"bold"}}>Products</Link>
                    </li>
                </ul>
                <Link to="cart" className="ml-auto cart-btn">
                    <button className="btn btn-outline-primary">
                        <i className="fas fa-shopping-cart mr-2"></i>
                        My Cart
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;
