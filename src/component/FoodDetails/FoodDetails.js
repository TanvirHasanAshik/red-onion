import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';
import Cart from '../Cart/Cart';
import './FoodDetails.css';

export const cart = [];
const FoodDetails = () => {
    const { foodId } = useParams();
    const [foodDetails, setFoodDetails] = useState({});
    const [count, setCount] = useState(1);
    const data = fakeData.find(data => data.id === parseInt(foodId));

    const handelCount = (countState) => {
        if (countState === 'isDecrease') {
            if (count > 1) {
                setCount(count - 1);
            }
        } else if (countState === 'isIncrease') {
            setCount(count + 1);
        }
    }
    foodDetails.quantity = count;

    useEffect(() => {
        setFoodDetails(data);
    }, [data])

    const { name, id, description, images, price, foodCategory } = foodDetails;

    const handleAddToCart = () => {
        cart.push(foodDetails);
        console.log(cart)
    }

    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12 col-sm-12">
                    <h1>{name}</h1>
                    <small className='text-muted'>Category: {foodCategory}</small>
                    <p>{description}</p>
                    <div className="d-flex align-items-center">
                        <h2>$ {price}</h2>
                        <div className='mx-5 border rounded-pill d-flex '>
                            <span onClick={() => handelCount('isDecrease')} className="px-2 increase"><h2>-</h2></span>
                            <span className="px-2"><h2>{count}</h2></span>
                            <span onClick={() => handelCount('isIncrease')}
                                className="px-2 decrease"><h2>+</h2></span>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart()} className="btn btn-success mt-2">Add to cart</button>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                    <img className='w-100' src={images} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;