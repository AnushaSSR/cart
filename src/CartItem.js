import React from 'react';

// class extender from react component and we are inheriting using extends keyword from component class inside the React package
class CartItem extends React.Component {
    // {/*to add state to our component */ }
    // whenever we are imheriting from another class,
    // we first need to call constructor of the parent class
    // increaseQuantity = () => {
    //     console.log(this.state);
    //     //setState form-1
        // this.setState({
        //     qty: this.state.qty+1
        // })

        //to simply change the title
        // if we require the prev state we will use the form 2, otherwise we will use the form 1
        // this.setState({
        //       title: "some new title"
        // })
        // //setState form 2 - fnc  from if prev state is required
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 1
        //     }
        // })

        // the state value will be rendered once but value will incremented by the sum of all the increment value mentioned in the functions 
        // this.setState((prevState) => {
        //     return{
        //        //qty value will be prev state + 1 =2 in our case
        //         qty: prevState.qty + 1
        //     }
        // })
        // this.setState((prevState) => {
        //     return{
        //         //qty value will be prev state + 1 =3 in our case

        //         qty: prevState.qty + 1
        //     }
        // })
        // this.setState((prevState) => {
        //     return{
        //         //qty value will be prev state + 5 =8 in our case

        //         qty: prevState.qty + 5
        //     }
        // })

        // this.setState((prevState) => {
        //         return{
        //             //qty value will be prev state + 5 =8 in our case

        //             qty: prevState.qty + 5
        //         }
// callbavck to get the value updated right after it got updaated
        //     }, () => {
        //         console.log('this.state', this.state);
        //     })


//callback for the function form as setState is asynchronous
        // this.setState({
        //     qty: this.state.qty + 2
        // }, () => {
        //     console.log('this.state', this.state);
        // });




        // the state value will be increased by the value that is mentioned in the last objcet call
        // this.setState({
        //       qty: this.state.qty+1
        // });
        // this.setState({
        //     qty: this.state.qty+2
        // });
        //   // the state value will be increased by the value that is mentioned in the last objcet call
        //   this.setState({
        //     qty: this.state.qty+1
        // });


        // // the same wont be refleceted in the ui . this is not the way to get it done// 
        // this.state.qty +=1;
//    }

// //setState will sometimes be synchrounous in case of promises, been set in the version 18
//     testing() {
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve('done');
//             }, 5000);
//         })

//         promise.then(() => {
//             //after 5 sec the quantity will be upto date
//             this.setState({qty:this.state.qty+1});
//             this.setState({qty:this.state.qty+1});
           
//             console.log('state', this.state);
//         });
//     }



    // decreaseQuantity = () => {
    //     const { qty } = this.state;

    //     //if qty is 0 nothing gonnna happen like it wont become negative , remains 0 
    //     if (qty === 0) {
    //         return;
    //     }

    //     this.setState((prevState) => {

    //         return {
    //             qty: prevState.qty - 1
    //         }
    //     })
    // }


    // handleClick = () => {
    //     this.setState({ qty: 2 }, () => console.log(this.state.qty));
    //     this.setState({ qty: 3 }, () => console.log(this.state.qty));
    // }
   render() {

        console.log('this.props', this.props);
        // this.setState({qty:1});
        // console.log("render", this.state.qty);
        // {/* we can also get them, as var and use them */}
        const { price, title, qty } = this.props.product;
        return (
            <div className='cart-item'>
                {/* {this.props.jsx} */}
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
                            onClick={this.increaseQuantity}
                        />
                        <img style={styles.actionIcons}
                            alt="decrease"
                            className="action-items"
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
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

