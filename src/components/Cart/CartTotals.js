import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton'

const CartTotals = ({value,history}) => {
    const { total,subtotal,tax,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/list">
                            <button className="btn btn-outline-primary text-uppercase mb-3 px-5" type="button"
                            onClick={()=> clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">
                            subtotal: &nbsp;
                                <strong>
                                    ${subtotal}
                                </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                            Cart tax: &nbsp;
                                <strong>
                                    ${tax}
                                </strong>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-title">
                            total: &nbsp;
                                <strong>
                                    ${total}
                                </strong>
                            </span>
                        </h5>
                        <PayPalButton total={total} clearCart={clearCart} history={history} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotals;
