import React, { Component } from 'react'
import { storeProducts, detailProduct } from '../src/Data'

const ProductContext = React.createContext();


class ProductProvider extends Component{
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        total: 0,
        subtotal: 0,
        tax: 0
    };
    componentDidMount(){
        this.setProducts();
      }
    
      setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item=> {
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=> {
          return {products: tempProducts};
        })
      }
    
      getItem = (id) => {
        const product = this.state.products.find(item=>  item.id === id);
        return product;
      }
      addToCart = (id) => {
        console.log("Added");
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.count = 1;
        product.inCart = true;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
          return{
            products: tempProducts,
            cart: [...this.state.cart,product]
          }
        },()=> {
          this.addTotals();
        })
      }
      handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(
          ()=>{
            return {detailProduct: product};
          }
        )
      }

      openModal = (id) => {
        const product = this.getItem(id);
        this.setState({modalProduct: product, modalOpen: true},()=> console.log(this.state.modalOpen))
      }
      closeModal = (id) =>{
        this.setState({
          modalOpen: false
        })
      }
      increment = (id) =>{
          let tempCart = [...this.state.cart];
          const selectedProduct = tempCart.find(item => item.id === id)

          const index = tempCart.indexOf(selectedProduct);
          const product =  tempCart[index];
          product.count = product.count + 1;
          product.total = product.count * product.price;

          this.setState(()=>{return {
            cart: [...tempCart]
          }},()=>{
            this.addTotals()
          } )
      }
      decrement = (id) =>{
            let tempCart = [...this.state.cart];
            const selectedProduct = tempCart.find(item => item.id === id);

            const index = tempCart.indexOf(selectedProduct);
            const product = tempCart[index];
            product.count = product.count - 1;

            if(product.count === 0) {
              this.removeItem(id)
            }
            else{
              product.total = product.count
            }
      }
      removeItem = (id) =>{
        console.log('Remove Function');
          let tempProducts = [...this.state.products];
          let tempCart = [...this.state.cart];
          console.log(tempCart);
          tempCart = tempCart.filter( item => item.id !== id)
          const index = tempProducts.indexOf(this.getItem(id))
          console.log(tempCart)
          let removeProduct =  tempCart[index];
          if(tempCart.length){ 
               removeProduct.inCart = false;
               removeProduct.count = 0;
               removeProduct.total = 0;
          }
          else{
            this.clearCart()
          }
          this.setState(()=>{
            return{
              cart: [...tempCart],
              products: [...tempProducts]
            }
          },()=>{
            this.addTotals()
          })
      }
      clearCart = (id) =>{
          this.setState({
            cart: []
          },
          ()=> {
            this.setProducts();
            this.addTotals();
          }
          )
      }
      addTotals = () =>{
        let subtotal = 0;
        this.state.cart.map(item=>{
          (subtotal += item.total)
        })
        const tempTax = subtotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subtotal + tax;
        this.setState(()=> {
          return{
            subtotal : subtotal,
            tax: tax,
            total: total
          }
        })
      }
    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart,
                removeItem: this.removeItem
            }}>
            {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider }