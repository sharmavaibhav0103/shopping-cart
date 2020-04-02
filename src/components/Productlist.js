import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../Context'
import { storeProducts } from '../Data'

class Productlist extends Component {
    state = {
        products: storeProducts
    };
    render() {
        return (
            <React.Fragment>
            <div className="container">
                <h1 className="text-center text-primary p-4">Our Products</h1>
                <div className="row">
                    <ProductConsumer>
                    {value => {
                        return value.products.map(
                            product => {
                                return <Product key={product.id} product={product} />
                            }
                        )
                    }
                    }
                    </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Productlist;
