import React from 'react';

const CartData = ({ data }) => {
    const { images, name, price, quantity } = data;
    return (
        <div>
            <div className=" mt-3 d-flex mx-3">
                <div>
                    <img className="" style={{ width: "80px" }} src={images} alt="" />
                </div>
                <div className="mx-5">
                    <h5>{name}</h5>
                    <h6 className='text-danger fw-bold'>${price}</h6>
                    <small className="text-muted">delivery free</small>
                </div>
            </div>

        </div>
    );
};

export default CartData;