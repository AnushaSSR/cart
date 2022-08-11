import React from 'react';



// class extender from react component and we are inheriting using extends keyword from component class inside the React package
//can be changed into a function as it has no state in it
//react will pass props as argument for every component by default

const Navbar = (props) => {

    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="cart-icon" />
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};


export default Navbar;
