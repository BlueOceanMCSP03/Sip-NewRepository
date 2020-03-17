import React from 'react';
import style from './Drink_Search.module.css';
import Bar from '../Navigation/Bar'
import Map from './Map.jsx'

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
        <Map
            // google={this.props.google}
            center={{lat: 30.2657, lng: -97.7497}}
            height='400px'
            zoom={19}
            centerAroundCurrentLocation={false}
        />
    </div>
);



export default Drink_Search;