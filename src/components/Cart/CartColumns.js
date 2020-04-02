import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-dark font-weight-bold text-uppercase">Products</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase font-weight-bold">Name</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase font-weight-bold">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase font-weight-bold">Quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase font-weight-bold">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase font-weight-bold">total</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;
