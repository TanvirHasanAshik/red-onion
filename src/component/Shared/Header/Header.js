import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header-container ">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mt-5 pt-5 text-center">
                    <h1 className="mb-5">Best food waiting for your belly</h1>
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search Food Name" />
                            <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Header;