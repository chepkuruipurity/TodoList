const Pool = require('pg').Pool;
const pool = new Pool({
user: 'postgres',
password:'1996poka',
host:'localhost',
port:5432,
database:'todolists'

});

module.exports= pool;