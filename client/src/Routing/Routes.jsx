import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Drink_Review from "../component/Drink_Review/Drink_Review";
import Drink_Search from "../component/Drink_Search/Drink_Search";
import Login from "../component/Login/Login";
import history from './history';
import User from "../component/Profile/User";

export default class Routes extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/Profile" component={User} />
                    <Route path="/Review" component={Drink_Review} />
                    <Route path="/Nearby" component={Drink_Search} />
                </Switch>
            </Router>
        )
    }
}