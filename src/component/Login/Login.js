import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({ email: "", password: "" })
    const [
        signInWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const handleBlur = e => {
        login[e.target.name] = e.target.value;
        setLogin(login);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(login.email, login.password);
    }

    let message;
    if (error) {
        message = <p className='text-danger'>Error:{error.message}</p>
    }
    if (user) {
        navigate('/')
    }
    return (
        <div className="login-container container">
            <div className="row d-flex justify-content-center ">
                <div className="col-md-6 mt-5">
                    <h1 className="text-center text-secondary mb-5">Please Login</h1>
                    {message}
                    <form onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input onBlur={handleBlur} name="email" type="email" class="form-control" id="floatingInput" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input onBlur={handleBlur} name="password" type="password" class="form-control" id="floatingPassword" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mt-2">
                            <button type="submit" className="btn btn-secondary w-100">Login</button>
                        </div>
                    </form>
                    <p>New User? <Link to='/signup'>Please Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;