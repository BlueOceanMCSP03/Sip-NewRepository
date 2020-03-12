import React from 'react';
import style from './Login.module.css';


const Login = () => (
    <div>
        <form>
            <label>Enter your Username:</label>
            <input type='text'></input>
            <br></br>
            <span>
                <label>Enter your Password:</label>
                <input type='text'></input>
            </span>
        </form>
        <button onClick={() => history.push('/Profile')}>Login</button>
    </div>
);

export default Login;