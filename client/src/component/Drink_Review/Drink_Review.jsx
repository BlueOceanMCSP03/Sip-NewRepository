import React, { Component } from 'React';
import style from './Drink_Review.test';
import StarRatingComponent from 'react-star-rating-component';

export default class Drink_Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      drinkName: ''
    }
    this.echandleLocation = this.echandleLocation.bind(this);
    this.echandleDrink = this.echandleDrink.bind(this);

  }
  echandleLocation(event) {
    //this is setting the state.location to a string to be sent to the database.
    this.setState({
      location: event.target.value
    })
  }

  echandleDrink(event) {
    //this is setting the state.drinkName to a string to be sent to the database.
    this.setState({
      drinkName: event.target.value
    })
  }


  render() {

    return (

      <div>
        <div className={style.userReview}>
          <div className={style.location}>
            <h1 className={style.text}>Location</h1>
            <input type='text' maxLength='255' onKeyUp={this.echandleLocation}></input>
          </div>

          <div className='drink'>
            <h1 className={style.text}>Drink</h1>
            <input type='text' maxLength='255' onChange={this.echandleDrink}></input>
          </div>

          <div className='uploadImage'>
            <div className='uploadimagebar'>
              <h1 className={style.text}>uploadImage</h1>
              <input type='text'></input><input type='submit' Value='Submit' required></input>
            </div>
          </div>

          <div className='rating/comment'>
            <h1 className={style.text}>Rating:</h1>
            <StarRatingComponent />
            <h1 className={style.text}>Comment:</h1>
            <input type="text"></input>
            <br></br>
            <input type='checkbox' required></input><h1 className={style.text}>Mark as favorite drink</h1>

            <button /*onClick={}*/>Submit</button>
          </div>
        </div>
      </div>

    )
  }
};