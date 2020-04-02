import React,{ Component } from 'react'
import CartColumns from '../Cart/CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../../Context'
import Cartlist from './Cartlist'
import CartTotals from './CartTotals'

export default class Cart extends Component{
    render(){
        return(
            <section>
                <ProductConsumer>
                    {
                        value => {
                            if(value.cart.length > 0){
                                return(
                                    <React.Fragment>
                                        <h1 className="text-primary text-center my-3 mb-3">Your Cart</h1>
                                        <CartColumns /> 
                                        <Cartlist value={value}/>
                                        <CartTotals value={value} />
                                    </React.Fragment>
                                )
                            }
                            else{
                                return <EmptyCart />
                            }
                        }
                    }
                </ProductConsumer>
            </section>
        )
    }
}