import React from 'react';
import Header from '../../Shared/Header/Header';
import ChooseUs from '../ChooseUs/ChooseUs';
import Food from '../Foods/Food';
import Footer from '../../Shared/Footer/Footer';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Food></Food>
            <ChooseUs></ChooseUs>
            <Footer></Footer>

        </div>
    );
};

export default Home;