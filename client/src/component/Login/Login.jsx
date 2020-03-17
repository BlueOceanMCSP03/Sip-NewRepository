import React from 'react';
import style from './Login.module.css';
import wallpaper from './Local_Images/Wallpaper.png';


const Login = (props) => (
    <div>
        <img src={wallpaper} className={style.image}></img>
        <h1 className={style.hello}>Hello,</h1>
        <div className={style.base} >
        <form className={style.userInput}>
            <span>
            <label>Username:</label>
            <br></br>
            <input type='text'></input>
            </span>
            <br></br>
            <span>
                <br></br>
                <label>Password:</label>
                <br></br>
                <input type='text'></input>
            </span>
        </form>
        <br></br>
        <div className={style.buttonAlign}>
        <button className={style.button} onClick={props.handleClick}>Login</button>
        </div> 
        </div>  
    </div>
);

export default Login;