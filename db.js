const mysql = require('mysql');

const db = mysql.createConnection({
    host:  'localhost',
    port: '33061',
    user: 'root',
    password: 'IrMySQL112***',
    database: 'library_db',
    multipleStatements: true
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Database connected")
});

module.exports = db;