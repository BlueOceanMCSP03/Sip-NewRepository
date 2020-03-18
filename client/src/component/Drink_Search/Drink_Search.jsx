import React from 'react';
import style from './Drink_Search.module.css';
import Bar from '../Navigation/Bar'
import history from '../../Routing/history';

const Drink_Search = () => (

    <div className={style.body}>
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
        </div>
        {/* <Map /> */}
        <div className={style.shopResults}>
            <div className={style.shopResult1} onClick={() => history.push("/Shop")}>
                <h1> hello1</h1>
                {/* MAP OVER ARRAY OF OBJECTS
                RETURN A LIST ITEMS FOR EACH OBJECT */}
            </div>
            <div className={style.shopResult2} onClick={() => history.push("/Shop")}>
                <h1> hello2</h1>
                {/* MAP OVER ARRAY OF OBJECTS
                RETURN A LIST ITEMS FOR EACH OBJECT */}
            </div>
            <div className={style.shopResult3} onClick={() => history.push("/Shop")}>
                <h1> hello3</h1>
                {/* MAP OVER ARRAY OF OBJECTS
                RETURN A LIST ITEMS FOR EACH OBJECT */}
            </div>
        </div>
        <Bar />
    </div>
);



export default Drink_Search;