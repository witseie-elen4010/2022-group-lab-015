'use strict'
const mssql = require('mssql')

const config = {
  server: 'wordle-db.database.windows.net',
  database: 'wordle-db',
  user:   process.env.G15DBadmin,
  password: process.env.G15DBaccesscode,
  port: 1433,
  options: {
    encrypt: true,
    enableArithAbort: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
}

const pools = new mssql.ConnectionPool(config)
.connect().then(pool => {
console.log('Connected to DB')
return pool
}).catch(err => {
console.log(err)
})

module.exports = {
  sql: mssql,
  pools: pools,
}
