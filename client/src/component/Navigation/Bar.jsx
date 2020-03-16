import React from 'React';
import style from './Bar.module.css';
import history from '../../Routing/history';



const Bar = () => {
    return (
        <div>
            <button className={style.button} onClick={() => history.push('/Review')}>Review</button>
            <button className={style.button} onClick={() => history.push('/Profile')}>Profile</button>
            <button className={style.button} onClick={() => history.push('/Nearby')}>Nearby</button>
        </div>
    )
}
export default Bar;