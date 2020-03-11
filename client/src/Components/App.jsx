import React, { Component } from 'react';
import UserReview from './UserReview.jsx';
// import axios from 'axios'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drinks: []
        }
    }

    render () {
        return (
        //    <GoogleMaps />
        <div>
            <UserReview />
        </div>
        )
    }
}