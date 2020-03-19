import React, { Component } from 'React';
import style from './Drink_Review.test';
import StarRatingComponent from 'react-star-rating-component';
const axios = require('axios');
import FormData from 'form-data';
import Bar from '../Navigation/Bar';

export default class Drink_Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      drinkName: '',
      file: null,
      rating: 0,
      comment: '',
      favoriteDrink: false
    }
    this.echandleLocation = this.echandleLocation.bind(this);
    this.echandleDrink = this.echandleDrink.bind(this);
    this.ecuploadImage = this.ecuploadImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.ecuserComment = this.ecuserComment.bind(this);
    this.ecfavoriteDrink = this.ecfavoriteDrink.bind(this);
    this.submitAll = this.submitAll.bind(this);
    this.onStarClickCustomIcon = this.onStarClickCustomIcon.bind(this);

  }



  echandleLocation(event) {
    this.setState({
      location: event.target.value
    })
  }

  echandleDrink(event) {
    this.setState({
      drinkName: event.target.value
    })
  }

  ecuploadImage(eve) {
    eve.preventDefault();
    let formData = new FormData();
    formData.append('myImage', this.state.file);
  }

  onChange(e) {
    this.setState({ file: e.target.files[0] })
    console.log(this.state.file)
  }


  ecuserComment(event) {
    this.setState({
      comment: event.target.value
    })
  }

  ecfavoriteDrink() {
    if (this.state.favoriteDrink === false) {
      this.setState({ favoriteDrink: true })
    } else if (this.state.favoriteDrink) {
      this.setState({ favoriteDrink: false })
    }
  }

  submitAll() {
    let formdata = new FormData();
    let userInfo = formdata.append('myImage', this.state.file);

    this.setState({
      file: userInfo
    })

    axios({
      method: 'post',
      url: '/addDrinkReview',
      data: {
        location: this.state.location,
        drinkName: this.state.drinkName,
        file: this.state.file,
        rating: this.state.rating,
        comment: this.state.comment,
        favoriteDrink: this.state.favoriteDrink
      },
      headers: {
        'content-type': 'mulipart/form-data'
      }
    })
      .then((response) => {
        alert(response)
      })
      .catch((error) => {
        alert(error)
      })

  }

  onStarClickCustomIcon(nextValue, prevValue, name) {
    this.setState({
      rating: nextValue
    })
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
            <input type='text' maxLength='255' onChange={this.echandleDrink}></input>
          </div>

          <div className='uploadImage'>
            <form>
              <div className='uploadimagebar'>
                <h1 className={style.text} >uploadImage</h1>
                <input type='file' name="myImage" onChange={this.onChange} />
              </div>
            </form>
          </div>

          <div className='rating/comment'>
            <h1 className={style.text}>Rating:</h1>
            <StarRatingComponent
              name='ratingComp'
              starCount={5}
              value={this.state.rating_custom_icon}
              onStarClick={this.onStarClickCustomIcon.bind(this)}
            />
            <h1 className={style.text}>Comment:</h1>
            <input type="text" onChange={this.ecuserComment}></input>
            <br></br>
            <a>
              <input onClick={this.ecfavoriteDrink} type='checkbox'></input><h1 className={style.text}>Mark as favorite drink</h1>
            </a>
            <button type='submit' className={style.text} onClick={this.submitAll} >Submit</button>
          </div>
        </div>
        <Bar />
      </div>

    )
  };
}