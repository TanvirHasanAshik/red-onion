import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SignUp = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({ email: "", password: "", confirmPassword: "" })
    const [
        createUserWithEmailAndPassword,
        loading,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleBlur = (e) => {
        signUp[e.target.name] = e.target.value;
        setSignUp(signUp);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (signUp.password !== signUp.confirmPassword) {
            return;
        } else {
            createUserWithEmailAndPassword(signUp.email, signUp.password);
        }
    }
    let message;
    if (error) {
        message = <p className="text-danger">Error: {error.message}</p>
    } else {
        navigate('/')
    }

    return (
        <div className='container'>
            <div className="row d-flex justify-content-center ">
                <div className="col-md-6 mt-5">
                    <h1 className="text-center text-secondary mb-5">Please Sign up</h1>
                    {message}
                    <form onSubmit={handleSubmit}>
                        <div class="form-floating mb-3">
                            <input onBlur={handleBlur} name='email' type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onBlur={handleBlur} name='password' type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input onBlur={handleBlur} name="confirmPassword" type="password" class="form-control" id="floatingPassword" placeholder="Confirm Password" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <div class="form-floating mt-2">
                            <button type="submit" className="btn btn-secondary w-100">Sign Up</button>
                        </div>
                    </form>
                    <p>Already have an account?<Link to='/login'>Please Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;