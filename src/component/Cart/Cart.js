import React from 'react';
import CartData from '../CartData/CartData';
import { cart } from '../FoodDetails/FoodDetails';
import './Cart.css';

const Cart = () => {
    console.log(cart)
    return (
        <div className='container cart-container'>
            <div className="row mt-5 d-flex align-items-center">
                <div className="col-md-6 col-sm-12">
                    <h1 className="py-5"><u>Edit Delivery Details</u></h1>
                    <form >
                        <input value="Delivery to door" readOnly className="form-control mt-2" type="text" placeholder="Default input" aria-label="default input example" />
                        <input value="107 Rd No 8" readOnly className="form-control mt-2" type="text" placeholder="Default input" aria-label="default input example" />
                        <input className="form-control mt-2" type="text" placeholder="Flat Name, Floor" aria-label="default input example" />
                        <input className="form-control mt-2" type="text" placeholder="Business Name" aria-label="default input example" />
                        <input className="form-control mt-2" type="text" placeholder="Add Delivery Instruction" aria-label="default input example" />
                        <input className='btn bg-danger mt-2 w-100 text-white' type="submit" value="Save & continue" />
                    </form>
                </div>
                <div className="col-md-6 col-sm-12">
                    {
                        cart.map(data => <CartData
                            key={data.id}
                            data={data}
                        ></CartData>)
                    }
                    <button className="btn btn-success mt-2 w-100">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;