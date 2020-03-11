const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.use(express.static('client/public/dist'));

app.route('/bundle')
    .get((req, res) => {
        res.sendFile(path.join(process.cwd(), './public/dist/bundle.js'))
    })

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(port, () => console.log(`Listening on ${port}`))