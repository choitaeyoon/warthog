const { pool } = require('pg');
const databaseConfig = require('./secrets/databaseConfig');

module.exports = new pool(databaseConfig);