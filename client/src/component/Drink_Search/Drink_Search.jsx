import React from 'react';
import style from './Drink_Search.module.css';
import Bar from '../Navigation/Bar'

const Drink_Search = () => (

    <div>
        <h1>Nearby</h1>
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
        <Bar />
    </div>
);



export default Drink_Search;