import React from 'react';
import style from './Login.module.css';


const Login = (props) => (
    <div className={style.base}>
        <h1>Hello,</h1>
        <form className={style.userInput}>
            <span>
            <label>Enter your Username:</label>
            <br></br>
            <input type='text'></input>
            </span>
            <br></br>
            <span>
                <label>Enter your Password:</label>
                <br></br>
                <input type='text'></input>
            </span>
        </form>
        <button className={style.button} onClick={props.handleClick}>Login</button>
    </div>
);

export default Login;