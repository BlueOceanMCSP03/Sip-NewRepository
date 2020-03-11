import React from 'react'; 
import style from './Drink_Search.module.css';

const Drink_Search = () => (

    <div>
        <label className={style.optionTextStyle}>Search By Choice</label>
        <br></br>
    <input type="checkbox"></input>
    <label className={style.optionTextStyle}>Mocha</label>
    <br></br>
    <input type="checkbox"></input>
    <label className={style.optionTextStyle}>Cappucino</label>
    <br></br>
    <input type="checkbox"></input>
    <label className={style.optionTextStyle}>Tea</label>
    <br></br>
    <input type="checkbox"></input>
    <label className={style.optionTextStyle}>Latte</label>
    <br></br>
    <div>
            <button className={style.button}>Review</button>
            <button className={style.button}>Profile</button>
            <button className={style.button}>Nearby</button>
        </div>
    </div>
);



export default Drink_Search;