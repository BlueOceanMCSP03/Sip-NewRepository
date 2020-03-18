import React from 'react'; 
import style from './User_style.module.css';
import Bar from '../Navigation/Bar';
import userPic from './User_Images/profile.jpeg';
import latte from './User_Images/latte.jpg';
import mocha from './User_Images/mocha.jpeg';

const User = () => (

//     <div className={style.base}>
//         <img src={pic} className={style.profile}></img>
//         <span className={style.userInfo}>
//         <h1>John Doe</h1>
//         <h2>Austin,TX</h2>
//         <h3>Favorite Drink: Caramel Latte</h3>
//         </span>
        
<div>
<div className={style.card}>
    <span className={style.border}>
  <img src={userPic} className={style.profile}></img>
  <span>
      <h1 className={style.userName}>John Doe</h1>
  <p className={style.title}>Austin, TX</p>
  <p className={style.drink}>Favorite Drink: "Mocha Latte"</p>
  </span>
    </span>
<div/>
<div className={style.verticalMenu}>
            <a className={style.active} id={style.list}>Order History</a>
            <a><img src={mocha} className={style.mocha}></img>Mocha <br></br>Some Coffee Shop</a>
            <a><img src={latte} className={style.latte}></img>Latte<br></br>Other Coffee Shop</a>
        
</div>
<Bar />
</div>
</div>
    
    
);

export default User;