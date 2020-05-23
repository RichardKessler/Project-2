const mysql = require('mysql2');

let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: 'process.env.DB_HOST',
        user: 'process.env.DB_USER',
        password: 'process.env.DB_PASS',
        database: 'jrbmf1rjnumqqbix'
    });
};

connection.connect();
module.exports = connection;