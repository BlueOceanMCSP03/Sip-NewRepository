import React from 'react'; 
import style from './Drink_Review.test';

const Drink_Review = () => {


    return ( 
    
    <div>
      <div className={style.userReview}>
        <div className={style.location}>
          <h1 className={style.text}>Location</h1>
          <input></input>
        </div>
      
        <div className='drink'>
          <h1 className={style.text}>Drink</h1>
          <input></input>
        </div>

        <div className='uploadImage'>
          <div className='uploadimagebar'>
            <h1 className={style.text}>uploadImage</h1>
            <input type='text'></input><button>Add Image</button>
          </div>
        </div>

        <div className='rating/comment'>
          <h1 className={style.text}>Rating:</h1>
        {/* <StarRatingComponent /> */}
          <h1 className={style.text}>Comment:</h1>
          <input type="text"></input>
          <br></br>
          <button></button><h1 className={style.text}>Mark as favorite drink</h1>
          <button>Submit</button>
        </div>
      </div>
    </div>
    )
};

export default Drink_Review;