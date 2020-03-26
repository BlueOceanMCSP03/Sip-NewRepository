const con = require('./db');
const Promise = require('bluebird');

// CREATE ROUTES

// ADD NEW USER PROFILE
const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const { username, password, location, userimage = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png' } = user;
        con.query('INSERT INTO users (user_name, user_location, user_password, user_image) VALUES (?, ?, ?, ?)', [username, location, password, userimage ], (err, data) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

const addDrinkReview = (review) => {
    return new Promise((resolve, reject) => {
        const { name_drink, store_name, user_id, rating, comment, review_time, drink_image, favorite_drink } = review;
        con.query('INSERT INTO reviews (name_drink, store_name, user_id, rating, comment, review_time, drink_image, favorite_drink) VALUES (?, ?, (SELECT user_id FROM users WHERE user_name = ?), ?, ?, ?, ?, ?)', review, (err, result) => {
            if (err) reject(err);
            resolve(data);
        })
    })
}

// READ ROUTES

// LOGIN USER TO PROFILE
const loginUser = (user) => {
    return new Promise((resolve, reject) => {
        const { username, password } = user;
        con.query('SELECT user_name, user_location, user_image from users WHERE user_name = ? AND user_password = ?', [username, password], (err, data) => {
            if (err) reject(err);
            resolve({ userProfile: data[0] });
        })
    })
};

// Retrieve Drinks for profiles
const retrieveDrinks = (username) => {
    return new Promise((resolve, reject) => {
        con.query('SELECT name_drink, drink_image, store_name, favorite_drink, rating, comment, review_time FROM reviews WHERE user_id = (SELECT user_id from users WHERE user_name = ?)', username, (err, data) => {
            if (err) reject(err) ;
            resolve({userDrinks: data});
        })
    })
}

// UPDATE ROUTES

// DELETE ROUTES



module.exports = { loginUser, addUser, retrieveDrinks, addDrinkReview }

