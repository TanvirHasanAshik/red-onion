import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-6 p-5">
                    <img src={logo} height="30" alt="" />
                </div>
                <div className="col-md-3 text-white mt-5">
                    <small className="d-block pt-2 fw-bold">About Online Food</small>
                    <small className="d-block pt-2 fw-bold">Read Our Blog</small>
                    <small className="d-block pt-2 fw-bold">Sign up to deliver</small>
                    <small className="d-block pt-2 fw-bold">Add your restaurant</small>
                </div>
                <div className="col-md-3 text-white mt-5">
                    <small className="d-block pt-2 fw-bold">Get help</small>
                    <small className="d-block pt-2 fw-bold">Read FAQs</small>
                    <small className="d-block pt-2 fw-bold">View all cities</small>
                    <small className="d-block pt-2 fw-bold">Restaurant near by me</small>
                </div>
            </div>
            <div className="row text-center mt-5 pt-5">
                <small className='text-muted'>copyright &copy; all rights reserved</small>
            </div>
        </div>
    );
};

export default Footer;