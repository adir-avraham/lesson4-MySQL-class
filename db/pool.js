const mysql2 = require('mysql2');


const { DB_PORT,
     HOST,
     USER,
     PASSWORD,
     DATABASE } = process.env;

const pool = mysql2.createPool({
    port: DB_PORT,
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0 

})

module.exports = pool.promise();