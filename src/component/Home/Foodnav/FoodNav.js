import React from 'react';

const FoodNav = ({ nav, handleFoodItem }) => {
    return (
        <>
            <button
                className="btn btn-link text-decoration-none text-danger fw-bold"
                onClick={() => handleFoodItem(nav)}
            >
                {nav}</button>
        </>
    );
};

export default FoodNav;