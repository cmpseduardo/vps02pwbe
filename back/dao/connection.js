const mysql = require("mysql")

const conexaoBD = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'senai'
})

module.exports = conexaoBD
