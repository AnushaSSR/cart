import React from 'react';
import CartItem from './CartItem';


// class extender from react component and we are inheriting using extends keyword from component class inside the React package
class Cart extends React.Component {

    render() {
        return (
            <div className='cart'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                
            </div>
        );
    }
}


export default Cart;



