const express = require('express');
const path = require('path');
const app = express();
const port = 3600;
const con = require('../database/index.js');
require('dotenv').config();

app.use(express.static(path.join(process.cwd(), '/client/public')));

// Sample route
app.get('/', (req, res) => {
    //res.send(path.join(process.cwd(), '/client/public'));
    res.send('test1')
});

app.route('/login')
    .get((req, res) => {
        //login existing user
        res.send('Test2')
    })

    .post((req, res) => {
        //Add new user
        
    })


app.post('/addDrinkReview', (req, res) => {
    //Add drink review to DB
    con.query()
})

app.get('/storeReviews', (req, res) => {
    //Store reviews
    con.query()
})

app.get('/filter', (req, res) => {
    // Google api call
    con.query()
})




app.listen(process.env.PORT || port, () => {
    console.log(`Server is Listening`);
});