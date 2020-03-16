import React from 'React';
import styleme from './Bar.module.css';
import history from '../../Routing/history';



const Bar = () => {
    return (
        <div>
            <button className={styleme.button1} onClick={() => history.push('/Review')}>Review</button>
            <button className={`${styleme.button2}`} onClick={() => history.push('/Profile')}>Profile</button>
            <button className={`${styleme.button3} ${styleme.tablink}`} onClick={() => history.push('/Nearby')}>Nearby</button>
            <button className={`${styleme.button4}`}>logout</button>
        </div>
    )
}

export default Bar;