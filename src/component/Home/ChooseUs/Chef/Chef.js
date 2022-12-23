import React from 'react';

const Chef = ({ chef }) => {
    const { title, description, image } = chef;
    return (

        <div className="col-md-4">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start h-100 w-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description.slice(0, 50)}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Chef;