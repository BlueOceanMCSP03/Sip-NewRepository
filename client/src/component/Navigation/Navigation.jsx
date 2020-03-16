import React from 'React';
import styleme from './Navigation.module.css';
const Navigation = () => {
    return (
        <div>
            <button className={styleme.button1}><i className="glyphicon glyphicon-search"></i></button>
            <button className={styleme.button2}><i className={`${styleme.icon}`}></i></button>
            <button className={`${styleme.button3} ${styleme.tablink}`}>Review</button>
        </div>
    )
}
export default Navigation;