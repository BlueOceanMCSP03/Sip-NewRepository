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
                        profile: [],
                }
                this.onUsernameInput = this.onUsernameInput.bind(this);
                this.onPasswordInput = this.onPasswordInput.bind(this);
                this.loginUser = this.loginUser.bind(this);
                this.handleClick = this.handleClick.bind(this);
                this.addUser = this.addUser.bind(this);
        }

        loginUser() {
                axios.get(`http://localhost:4000/login`, {
                        params: {
                                username: this.state.user_name,
                                password: this.state.password,
                        }
                })
                        .then((results) => {
                                // This delivers the profile page. use to your advantage!
                               this.setState({
                                       profile: results,
                               })
                                this.handleClick();
                        })
                        .catch((err) => {
                                console.log(err)
                        })
        }

        addUser() {
                axios.post(`http://localhost:4000/login`, {
                        params: {
                                username: this.state.user_name,
                                password: this.state.password,
                                image,
                                location: 'Austin, TX',
                        }
                })
                        .then((results) => {
                                console.log(results)
                                
                               
                        })
                        .catch((err) => {
                                console.log(err);
                        });
        }

        onUsernameInput(e) {
                console.log(e.target.value)
                this.setState({
                        user_name: e.target.value,
                })
        }

        onPasswordInput(e) {
                console.log(e.target.value)
                this.setState({
                        password: e.target.value,
                })
        }

        handleClick() {
                this.setState({
                        isAuth: true,
                }, () => history.push('/Profile'));
        }

        render() {
                const { isAuth } = this.state;
                return (
                        <Router history={history} className={style.body}>
                                {
                                        isAuth ?
                                                <Routes isAuth={isAuth} />
                                                :
                                                <Login
                                                        handleClick={this.handleClick}
                                                        onPasswordInput={this.onPasswordInput}
                                                        onUsernameInput={this.onUsernameInput}
                                                        loginUser={this.loginUser}
                                                />
                                }
                        </Router>
                )
        }
}

export default App; 