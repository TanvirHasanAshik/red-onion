import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';
import './FoodDetails.css';



const FoodDetails = () => {
    const { foodId } = useParams();
    const [foodDetails, setFoodDetails] = useState({});

    const data = fakeData.find(data => data.id === parseInt(foodId));

    useEffect(() => {
        setFoodDetails(data);
    }, [data])
    const { name, id, description, images, price, foodCategory } = foodDetails;
    return (
        <div className='container'>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-12 col-sm-12">
                    <h1>{name}</h1>
                    <small>Category: {foodCategory}</small>
                    <p>{description}</p>
                    <div className="d-flex align-items-center">
                        <h2>$ {price}</h2>
                        <button className="mx-2 btn "><h2>-</h2></button>
                        <h3>0</h3>
                        <button className="mx-2 btn "><h2>+</h2></button>
                    </div>
                </div>
                <div className="col-md-6 col-12 col-sm-12">
                    <img className='w-100' src={images} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;