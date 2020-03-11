import React from 'react';
import Login from './Login/Login';
import User_Profile from './User_Profile/User_Profile';
import Drink_Search from './Drink_Search/Drink_Search';
import Drink_Review from './Drink_Review/Drink_Review';
import Shop_Profile from './Shop_Profile/Shop_Profile';

class App extends React.Component {
  
    render() {
      
      return (
        <div>
         <Login /> 
         <User_Profile />
         <Drink_Search />
         <Drink_Review />
         <Shop_Profile />
        </div>
      )
    }
  }

export default App; 