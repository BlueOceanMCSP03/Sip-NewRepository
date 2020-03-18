import React from 'React';
import styleme from './Bar.module.css';
import history from '../../Routing/history';



const Bar = () => {
    return (
        <div className={styleme.square}>
            <button className={styleme.button1} onClick={() => history.push('/Review')}><i className="fa fa-star" style={{'position':'center','fontSize':'4vh'}} value="5"></i></button>
            <button className={`${styleme.button2}`} onClick={() => history.push('/Profile')}><i className="menu_icon fa fa-child" style={{'position':'center','fontSize':'6vh'}}></i></button>
            <button className={`${styleme.button3} ${styleme.tablink}`} onClick={() => history.push('/Nearby')}><i className="fa fa-bitbucket" style={{'position':'center','fontSize':'4vh'}}></i></button>
        </div>
    )
}

export default Bar;