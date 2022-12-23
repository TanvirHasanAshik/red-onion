import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FoodItem.css';
const FoodItem = ({ food }) => {
    const { id, foodCategory, name, images, description, price } = food;
    const navigate = useNavigate();
    const handleCard = (id) => {
        navigate(`/foodDetails/${id}`)
    }
    return (
        <div onClick={() => handleCard(id)} className="food-item-container col-md-4 col-sm-6 col-12 g-5">
            <div className="card border-0">
                <img src={images} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <h5>Tk: {price}</h5>
                    <h6>Food Category: {foodCategory}</h6>
                    <p className="card-text text-muted">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;