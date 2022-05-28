const mssql = require('mssql')
const config = {
    
server: 'wordle-db.database.windows.net',
database: 'wordle-db',
user: process.env.azureDBadmin,
password: process.env.azureDBaccesscode,
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

module.exports = {
sql: mssql,
configurations: config,
}
