import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "..//register.js/register.css"

import yellowcar from "./yellowcar.png"
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loginwithgoogle from './Loginwithgoogle';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const logindata = await axios.post('http://localhost:9999/user/login', { email, password });
            console.log("logindata", logindata)
            if (logindata.status === 200) {
                localStorage.setItem('userdata', JSON.stringify(logindata.data.data));
                navigate('/home');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (

        <div className="bigdiv">
            <div class="maincontainer">
                <div>
                    <div class="image-section">
                        <img class="car" src={yellowcar} alt="CarWay Logo" />
                    </div>
                </div>
                <div class="form-section">
                    <h2 className="signuplogo" >Car Rental</h2>

                    <h2 className="createA">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="debra.holt@example.com" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Your password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
                        </div>

                        <div className='sign-box'>
                            <button type="submit" class="carpagebutton">Sign In</button>
                            <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
                                <Loginwithgoogle />
                            </GoogleOAuthProvider>
                        </div>
                        <a className='signinlink' href="/">I don't have account</a>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
