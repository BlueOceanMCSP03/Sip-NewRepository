import React from 'react';
import style from './Shop_Profile.module.css';
import Bar from '../Navigation/Bar';
import shops from './shop';


const Shop_Profile = () => (
    <div>
        <div className={style.mainContainer}>
            <div className={style.storeContainer}>
                <div className={style.storeInfoContainer}>
                    <img className={style.img} src={shops[0].image} />
                    <div className={style.storeInfo}>
                        <p className={style.name}>{shops[0].store}</p>
                        <p className={style.loc}>{shops[0].location}</p>
                        <p className={style.rating}>{shops[0].stars}</p>
                    </div>
                </div>
            </div>
            <div className={style.reviewContainer}>
            <span className={style.reviews}>Reviews</span>
                <>
                    { shops[0].Reviews.map((review) => {
                        return(
                            <div key={review.key} className={style.reviewItems}>
                                <img className={style.revImg} src={review.image} />
                                <div className={style.revContentContainer}>
                                    <p className={style.revRating}>{review.stars}</p>
                                    <p className={style.comment}>{review.comment}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </>
            </div>
        </div>
        <Bar />
    </div>
);

export default Shop_Profile;