import React from 'react';
import CartItem from './CartItem';


// class extender from react component and we are inheriting using extends keyword from component class inside the React package
class Cart extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id:2

                },
                {
                    price: 59999,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id:3

                }
            ]

        }
        //,may go messy if multiple fncs nned to be used, insteda we can used arro function
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.decreaseQuantity = this.decreaseQuantity.bind(this);
        // this.testing();

    }

    handleIncreaseQuantity = (product) => {
        console.log("Please inc the qty of", product.title);
        // to get the list of products from the updated state
        const {products} = this.state;
        // to get the index of the current product selected
        const index = products.indexOf(product);

        // to increades the quantity of the product whose index is selected
        products[index].qty += 1;

        // to render the increased value to the ui
        this.setState({
            // products: products
            // by short hand as both are same
            products

        })

    }


    handleDecreaseQuantity = (product) => {
        console.log("Please decrease the qty of", product);
        const {products} = this.state;
        const index= products.indexOf(product);
        // console.log("product is ",product);
        // console.log(index);

        const  qty  = products[index].qty;

//        console.log(qty);

        if(qty === 0){
            return;
        }

        products[index].qty -=1

        this.setState({
            products
        })

    
    }

    handleDeleteProduct =(id) =>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id);

        this.setState({
            products:items

        })
    }

    render() {
        const {products} = this.state;
        const arr = [1, 2, 3, "string", 4, 5];

        return (
            <div className='cart'>
                {/* <CartItem qty={1} price={99} title={"Watch"} img={''} /> */}

                {products.map ((product)=>{
                    return (
                        <CartItem
                         product={product}
                         key={product.id}
                         onIncreaseQuantity = {this.handleIncreaseQuantity}
                         onDecreaseQuantity = {this.handleDecreaseQuantity}
                         onDeleteProduct = {this.handleDeleteProduct}
                        //  func={()=> console.log("fnc passed")}
                        //  isLoggedIn={false}
                        //  jsx={<h1>Test</h1>}
                        //  comp={<CartItem/>}
                        />
                    )
                })}
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
                {/* // <div className='cart'>
            //     {arr.map((item) =>{
            //         return item+5;
            //     })}
            // </div>
            </div> */}
            </div>
        );
    }
}


export default Cart;



