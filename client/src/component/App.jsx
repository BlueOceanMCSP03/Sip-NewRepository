import React, { Component, Fragment } from "react";
import axios from 'axios';
import { BrowserRouter as Router } from "react-router-dom";
import history from '../Routing/history';
import Routes from '../Routing/Routes';
import Login from './Login/Login';
import style from './App.module.css';

class App extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        isAuth: false,
                        user_name: '',
                        password: '',
                }
                this.onChange = this.onChange.bind(this);
                this.loginUser = this.loginUser.bind(this);
                this.handleClick = this.handleClick.bind(this);
        }

        loginUser() {
                axios.get('http://localhost:3000/login', {
                        params: {
                                username: this.state.user_name,
                                password: this.state.password,
                        }
                })
                        .then((results) => {
                                console.log(results)
                                this.setState(state => ({
                                        isAuth: !state.isAuth,
                                }))
                        })
                        .catch((err) => {
                                console.log(err)
                        })
        }

        onChange() {
                this.setState({
                        user_name: e.target.value,
                        password: e.target.value,
                })
        }
        handleClick() {
                this.setState({
                        isAuth: true,
                }, () => history.push('/Profile'));
        }

        render() {
                const { isAuth, user_name, password } = this.state;
                return (
                        <Router history={history} className={style.body}>
                                {
                                        isAuth ?
                                                <Routes isAuth={isAuth} />
                                                :
                                                <Login handleClick={this.handleClick}/>
                                }
                        </Router>
                )
        }
}


export default App; 