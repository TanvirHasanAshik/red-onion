import React, { useEffect, useState } from 'react';
import Chef from './Chef/Chef';
import './ChooseUs.css';

const ChooseUs = () => {
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('chefData.json')
            .then(res => res.json())
            .then(data => setChefData(data));
    }, []);

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center mt-5">
                    <h2 className=''>Why you choose us?</h2>
                    <p className='mt-2 text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae excepturi atque delectus consequuntur consectetur fugit magni ullam? Alias, praesentium.</p>
                </div>
            </div>
            <div className="row mt-5">
                {
                    chefData.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default ChooseUs;