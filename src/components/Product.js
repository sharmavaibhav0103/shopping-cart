import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { ProductConsumer } from  '../Context'

class Product extends Component {
    render() {
        const {id, title,inCart,price,img } = this.props.product;
        return (
           <React.Fragment> 
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card bg-white">
                            <ProductConsumer>
                            {(value) => (
                                <React.Fragment>
                                    <div onClick={() => {
                                        value.handleDetail(id);
                                        value.openModal(id)
                                    }}  className="img-container p-5">

                                    <Link to='/details'>
                                        <img src={img} alt="product" className="card-img-top"/>
                                    </Link>    
                                </div> 
                                <button className="btn btn-outline-primary" onClick={ () => value.addToCart(id)} disabled={inCart ? true: false}>
                                    {inCart ? <p disabled>In Cart</p> : <i className="fas fa-cart-plus"></i>}
                                </button>
                                </React.Fragment>
                             )
                            }
                    </ProductConsumer>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5 className="font-italic mb-0">
                        <span className="mr-0">$</span>
                        {price}
                    </h5>
                </div>
            </div>
            </ProductWrapper>
            </React.Fragment>
        )
    }
}

Product.propType ={
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
    overflow: hidden;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transitio: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2)
    }
    .card-footer{
        background: rgba(247,247,247)
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all 500ms linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
button{
    position: absolute;
    bottom: 3rem;
    right: 0;
    padding: 0.2rem 0.4rem;
    border:none;
    font-size: 1.4rem;
    border-radius: 5px;
    transform: translate(100%,0%);
    transition: transform 500ms linear;
}
.card:hover button{
    transform: translate(0,0);
}
`

export default Product;
