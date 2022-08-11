import React from 'react';
import CartItem from './CartItem';


// class extender from react component and we are inheriting using extends keyword from component class inside the React package
const Cart = (props) => {

    // womt habve access to this
    const { products } = props;

    return (
        <div className="cart">

            {products.map((product) => {
                return (
                    <CartItem
                        product={product}
                        key={product.id}
                        // we are getting these func via props from app and we are passing these to cartitem by same name 
                        onIncreaseQuantity={props.onIncreaseQuantity}
                        onDecreaseQuantity={props.onDecreaseQuantity}
                        onDeleteProduct={props.onDeleteProduct}

                    />
                )
            })}
        </div>
    );
}



export default Cart;



