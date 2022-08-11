import React from 'react';


// class extender from react component and we are inheriting using extends keyword from component class inside the React package
const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
     } = props;

    return (
        <div className="cart-item">
            <div className="left-block">
                {/* //imges are in the objcet named product and img is it's property  */}
                <img style={styles.image} src={product.img} />
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
                        onClick={() => onIncreaseQuantity(product)}
                    />

                    <img style={styles.actionIcons}
                        alt="decrease"
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => onDecreaseQuantity(product)}
                    />

                    <img style={styles.actionIcons}
                        alt="delete"
                        className="action-items"
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                        onClick={() => onDeleteProduct(product.id)}
                    />

                </div>

            </div>

        </div>
    )
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

