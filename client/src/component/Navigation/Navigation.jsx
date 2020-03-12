import React from 'React';
import styleme from './Navigation.module.css';
const Navigation = () => {
    return (
        <div>
            <button className={styleme.button}>Review</button>
            <button className={styleme.button}>Profile</button>
            <button className={styleme.button}>Nearby</button>
        </div>
    )
}
export default Navigation;