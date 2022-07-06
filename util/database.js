const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "o_Otaladno2",
    database: "node_sandbox",
})

module.exports = pool.promise();
