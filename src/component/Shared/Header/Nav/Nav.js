import React from 'react';
import { Link } from 'react-router-dom';
import logoTwo from '../../../../images/logo2.png';
const Nav = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">
                    <img src={logoTwo} alt="" width="100" height="30" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto me-5">
                        <Link className="nav-link active" aria-current="page" to="#">Cart</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <button className="btn btn-danger rounded-pill" to="/signUp">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;