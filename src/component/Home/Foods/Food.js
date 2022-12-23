import React, { useEffect, useState } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import FoodNav from '../Foodnav/FoodNav';
import './Food.css';

const Food = () => {
    const [foods, setFoods] = useState([]);
    const [selectFood, setSelectFood] = useState(null);
    let foodNav = [];

    useEffect(() => {
        fetch('foodData.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    for (const food of foods) {
        if (foodNav.indexOf(food.foodCategory) === -1) {
            foodNav.push(food.foodCategory);
        }
    }

    const handleFoodItem = (foodItem) => {
        const foodSelect = foods.filter(food => {
            if (food.foodCategory === foodItem) {
                return food;
            }
        });
        setSelectFood(foodSelect);
    };

    return (
        <div className="container food-container mt-5">
            <div className="row food-nav d-flex justify-content-center">
                <div className="col-md-6 text-center">
                    {
                        foodNav.map(nav => <FoodNav
                            nav={nav}
                            handleFoodItem={handleFoodItem}
                        ></FoodNav>)
                    }
                </div>
            </div>
            <div className="row mt-5">
                {!selectFood ? foods.map(food => <FoodItem
                    key={food.id}
                    food={food}
                ></FoodItem>)
                    :
                    selectFood.map(food => <FoodItem
                        key={food.id}
                        food={food}
                    ></FoodItem>)
                }
            </div>
        </div>

    );
};

export default Food;