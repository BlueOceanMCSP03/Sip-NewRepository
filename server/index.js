const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { loginUser, addUser, retrieveDrinks } = require('../database/query');
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
    .get(async (req, res) => {
        //login existing user
        let result = [];
        try {
            const userInfo = await loginUser(req.query);
            result = [...result, userInfo];
            const drinkInfo = await retrieveDrinks(req.query.username);
            result = [...result, drinkInfo];
            res.json(result);
        }
        catch (err) {
            res.sendStatus(500);
        }
    })

    .post((req, res) => {
        //Add new user
        // We need username, pw, location, userimage.
        addUser(req.query)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                res.sendStatus(500);
            })
    })

// ADD DRINK REVIEWS TO DB
app.post('/addDrinkReview', (req, res) => {
    console.log(req.query);
    //Add drink review to DB
    addDrinkReview()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
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