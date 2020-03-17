import React, { Component } from 'React';
import style from './Drink_Review.test';
import StarRatingComponent from 'react-star-rating-component';
// import $ from 'jquery';
const axios = require('axios');
import Bar from '../Navigation/Bar';

export default class Drink_Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: '',
      drinkName: '',
      file: null,
      rating: 0,
    }
    this.echandleLocation = this.echandleLocation.bind(this);
    this.echandleDrink = this.echandleDrink.bind(this);
    this.ecuploadImage = this.ecuploadImage.bind(this);

  }
  echandleLocation(event) {
    //this is setting the state.location to a string to be sent to the database.
    this.setState({
      location: event.target.value
    })
    console.log(this.state.location)
  }

  echandleDrink(event) {
    //this is setting the state.drinkName to a string to be sent to the database.
    this.setState({
      drinkName: event.target.value
    })
  }

  // sendFile(fileData) {
  //   var form
  // }

  // processFile(dataURL, fileType) {
  //   var maxWidth = 800;
  //   varmaxHeight = 800;

  //   var image = new Image();
  //   image.src = dataURL;

  //   image.onload = () => {
  //     var width = image.width;
  //     var height = image.height;
  //     var shouldResize = (width > maxWidth) || (height > maxHeight);

  //     if(!shouldResize) {
  //       sendFile(dataURL);
  //       return;
  //     }

  //     var newWidth;
  //     var newHeight;

  //     if(width > height) {
  //       newHeight = height * (maxwidth / width);
  //       newWidth = maxWidth;
  //     } else {
  //       newWidth = width * (maxHeight / height);
  //       newHeight = maxHeight;
  //     }

  //     var canvas = document.getElementById('imageUpload');

  //     canvas.width = newWidth;
  //     canvas.height = newHeight;

  //     var context = canvas.getContext('2d');

  //     context.drawImage(this, 0, 0, newWidth, newHeight);

  //     dataURL = canvas.toDataURL(fileType);

  //     sendFile(dataURL);
  //   };
  //   image.onerror = () => {
  //     alert('There was an error processing your file');
  //   };
  // }

  // readFile(file) {
  //   var reader = new FileReader();
  //   reader.onloadend = () => {
  //     processFile(reader.result, file.type)
  //   }
  //   reader.onerror = () => {
  //     alert('There was an error reading the file!');
  //   }
  //   reader.readAsDataURL(file)
  // }

  // ecimageUpload() {
  //   // if (navigator.userAgent.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
  //   //   return false;
  //   // }
  //   if(window.File && window.FileReader && widow.FormData) {
  //     var $inputfield = $('#file');
  //     $inputfield.on('change', function(e) {
  //       var file = e.target.files[0];

  //       if(file) {
  //         if(/^image\//i.test(file.type)) {
  //           readFile(file);
  //         } else {
  //           alert('Not a valid image!');
  //         }
  //       }
  //     });
  //   } else {
  //     alert('File upload is not supported');
  //   }
    
  // }

  ecuploadImage(eve) {
    eve.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    // axios.post("/upload")
  }
  

  render() {

    return(

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
              <div className='uploadimagebar'>
                <form onSubmit={this.ecuploadImage}>  
                  <h1 className={style.text}>uploadImage</h1>
                  <input type='file' name="myImage" onChange={this.onChange} />
                  <button type='submit' className={style.text}>Upload</button>
                </form>
              </div>
            </div>

            <div className='rating/comment'>
              <h1 className={style.text}>Rating:</h1>
              <StarRatingComponent />
              <h1 className={style.text}>Comment:</h1>
              <input type="text"></input>
              <br></br>
              <a>
                <input type='checkbox'></input><h1 className={style.text}>Mark as favorite drink</h1>
              </a>
              <button /*onClick={}*/ className={style.text}>Submit</button>
            </div>
          </div>
          <Bar />
        </div>

    )
  };
}
