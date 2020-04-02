import React from 'react';

const Cartitem = ({ item,value }) => {
    const { id,title,img,price,total,count } = item;
    const { increment,decrement,removeItem } = value;
    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} style={{width: "5rem",height: "5rem"}} className="img-fluid" alt="product"></img>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product:</span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">Product:</span>
            {price}
            </div>

            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 mx-3">
                <div className="d-flex jusitfy-content-center mx-3">
                
                    <span className="btn btn-outline-dark mx-1" onClick={()=> decrement(id)}>-</span>
                    <span className="btn btn-outline-dark mx-1">{count}</span>
                    <span className="btn btn-outline-dark mx-1" onClick={()=> increment(id)}>+</span>
                
                </div>
            </div>
            
            <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={()=> removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>Item total : $ {total}</strong>
            </div>

        </div>
    );
}

export default Cartitem;
