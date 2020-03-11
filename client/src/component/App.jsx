import React from 'react';
import Navigation from './Navigation/Navigation';
// import Navigation from '../Navigation/Navigation.jsx'


export default class App extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
          
        }
    }
  render() {
      return (
          <div>
              <Navigation />
          </div>
      )
  }
}