/** Database for lunchly */

const { Client } = require("pg");

const db = new Client({
    host: "localhost",
    port: 5432,
    database: "lunchly",
    user: "postgres",
    password: "postgres"
});

db.connect();

module.exports = db;
