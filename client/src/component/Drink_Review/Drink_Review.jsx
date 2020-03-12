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
    this.echandleLocation = this.echandleLocation.bind(this)
    
  }
      echandleLocation(event) {
        this.setState({
          location: event.target.value   
        })
        console.log(this.state.location)
      }

      echandleDrink(event) {
        this.setState({
          drinkName: event.target.value
        })
        console.log()
      }

    render() {
      
      return ( 
    
      <div>
        <div className={style.userReview}>
          <div className={style.location}>
            <h1 className={style.text}>Location</h1>
            <input type='text' maxLength='255' onChange={this.echandleLocation}></input>
          </div>

          <div className='drink'>
            <h1 className={style.text}>Drink</h1>
            <input></input>
          </div>

          <div className='uploadImage'>
            <div className='uploadimagebar'>
              <h1 className={style.text}>uploadImage</h1>
              <input type='text'></input><input type='submit'  Value='Submit' required></input>
            </div>
          </div>

          <div className='rating/comment'>
            <h1 className={style.text}>Rating:</h1>
              <StarRatingComponent />
            <h1 className={style.text}>Comment:</h1>
              <input type="text"></input>
              <br></br>
              <input type='checkbox' required></input><h1 className={style.text}>Mark as favorite drink</h1>

              <button onClick="">Submit</button>
          </div>
        </div>
      </div>

      )
    }
};