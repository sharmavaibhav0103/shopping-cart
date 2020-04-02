import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Modal extends Component {
    render() {
        return (
                 <ProductConsumer>
                 {(value) => {
                     const {modalOpen,closeModal} = value;
                     const {img,title,price} = value.modalProduct;
                     console.log("ModalValue: ",modalOpen);
                     if(!modalOpen){
                         return null;
                     }
                     else{
                         return( 
                         <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>Item added to cart.</h5>
                                        <img src={img} className="img-fluid" alt="product" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">Price : {price}
                                        </h5>
                                        <Link to="/details"> 
                                            <button className="btn btn-primary my-3" onClick={closeModal}>
                                           Continue Shopping</button>
                                        </Link>
                                        <Link to="/cart"><button className="btn btn-success mx-3" onClick={closeModal}>Go To Cart</button></Link>
                                    </div>
                                </div>
                            </div>
                         </ModalContainer>)
                     }
                 }}
                 </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div `
position: fixed;
height: 100vh !important;
top: 0;
left: 0;
right: 0;
bottom;
background-color: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-contentL: center;
#modal{
    background: white;
}`
export default Modal;
