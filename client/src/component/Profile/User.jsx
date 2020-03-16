import React from 'react'; 
import style from './User_style.module.css';
import Bar from '../Navigation/Bar';

const User = () => (

    <div className={style.base}>
        <img></img>
        <span className={style.userInfo}>
        <h1>John Doe</h1>
        <h2>Austin,TX</h2>
        <h3>Favorite Drink: Caramel Latte</h3>
        </span>
        <div className={style.verticalMenu}>
            <a className={style.active} id={style.list}>Order History</a>
            <a>Mocha <br></br>Some Coffee Shop</a>
            <a>Latte<br></br>Other Coffee Shop</a>
        
</div>
<Bar />
    </div>
    
);

export default User;