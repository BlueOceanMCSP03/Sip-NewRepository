import React from 'React';
import styleme from './Bar.module.css';
import history from '../../Routing/history';



const Bar = () => {
    return (
        <div>
            <button className={styleme.button1} onClick={() => history.push('/Review')}><i className="fa fa-star" style={{'fontSize':'2.5rem'}} value="5"></i></button>
            <button className={`${styleme.button2}`} onClick={() => history.push('/Profile')}><i className="menu_icon fa fa-child" style={{'fontSize':'4rem'}}></i></button>
            <button className={`${styleme.button3} ${styleme.tablink}`} onClick={() => history.push('/Nearby')}><i className="fa fa-bitbucket" style={{'fontSize':'2.5rem'}}></i></button>
        </div>
    )
}

export default Bar;