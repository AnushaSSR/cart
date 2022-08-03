import React from 'react';

// class extender from react component and we are inheriting using extends keyword from component class inside the React package
class CartItem extends React.Component {
    // {/*to add state to our component */ }
    // whenever we are imheriting from another class,
    // we first need to call constructor of the parent class

    constructor() {
        super();
        this.state = {

            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }

    }

    increaseQuantity () {
        console.log(this.state);
    }
    render() {
        // {/* we can also get them, as var and use them */}
        const { price, title, qty } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    {/* to grab the data and use it in our jsx component */}
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>Rs. {price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img style={styles.actionIcons}
                         alt="increase" 
                         className="action-items" 
                         src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                         onClick={this.increaseQuantity.bind(this)}
                        />
                        <img style={styles.actionIcons}
                         alt="decrease"
                         className="action-items"
                         src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                        />
                        <img style={styles.actionIcons}
                         alt="delete"
                         className="action-items"
                         src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        />

                    </div>

                </div>



            </div>
        )
    }

}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc"
    },
    actionIcons: {
        height: 25,
        width: 25,
        marginRight: 10
    }

}
export default CartItem;


{/* state is a ay to store local data for the variable, it's basically a js object which can have props
in our case i has title, price, image*/}

