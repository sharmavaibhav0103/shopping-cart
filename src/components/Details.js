import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context'

class Details extends Component {
    render() {       
        return (
            <ProductConsumer>
            {value => {
                const { company,img,info,price,title,inCart } = value.detailProduct;
                console.log(img);
                return(
                    <div className="container">

<div className="row my-5">

    <div className="col-10 mx-auto col-md-6 text-capitalize">
    <img src={img} className="img-fluid" style={{height: "530px"}} alt="phone-img"/>
    </div>

    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
    <h2>Model: {title}</h2>
    <h4 className="text-title text-uppercase text-muted mt-3 mb-3">
        Made By: <span className="text-uppercase">{company}</span>
    </h4>
    <h4 className="text-dark">
        <strong>Price:
        <span>$</span>{price}</strong>    
    </h4>
    <p className="text-capitalize font-weight-bold mt-3 mb-0">
        Some Info About Products:
    </p>
    <p className="text-muted lead">
        {info}
    </p>
    <div>
        <Link to="/list"><button className="btn btn-primary">Back To Products</button></Link>
        <button className="btn btn-dark mx-3 my-3" disabled={ inCart ? true : false }>
            { inCart ? "inCart" : "Add To Cart"}
        </button>
    </div> 
    </div>
</div>
</div>     
                )
            }}
            </ProductConsumer>
        );
    }
}
export default Details;
