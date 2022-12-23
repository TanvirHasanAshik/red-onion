import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import logoTwo from '../../../../images/logo2.png';
import { useSignOut } from 'react-firebase-hooks/auth';
const Nav = () => {
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5" to="/">
                    <img src={logoTwo} alt="" width="100" height="30" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto me-5">
                        <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
                        {user ? <button onClick={() => signOut()} className="btn btn-success">Log Out</button>
                            : <Link className="nav-link" to="/login">Login</Link>}
                        {!user && <Link className="btn btn-danger rounded-pill" to="/signup">Sign up</Link>}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Nav;