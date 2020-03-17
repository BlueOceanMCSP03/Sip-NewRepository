const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const DB = require('../database/index.js');
const port = 3000;
require('dotenv').config();


app.use(express.static(path.join(process.cwd(), '/client/public')));

app.use(cors());
// Sample route
app.get('/', (req, res) => {
    //res.send(path.join(process.cwd(), '/client/public'));
    res.send('test1')
});

app.route('/login')
    .get((req, res) => {
        //login existing user
        const {username, password} = req.query;
        DB.query()
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