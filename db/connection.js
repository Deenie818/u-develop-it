const mysql = require('mysql2');

//connect to the database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        //Your MySQL password
        password: 'Lolajake2008!',
        database: 'election'
    });










    module.exports = db;