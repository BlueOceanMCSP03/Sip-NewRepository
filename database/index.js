const mysql = require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT * FROM drinks', function (error, results, fields) {
    if (error) throw error;
    results.forEach((results) => {
        console.log(`${results.user_id} kinda likes the ${results.drink_name}`)
    })
});


// connection.query('SELECT 2 + 2 AS solution', function(error,results, fields) {
//    if (error) throw error;
//    console.log('The solution is:', results[0].solution); 
// });


module.exports = connection