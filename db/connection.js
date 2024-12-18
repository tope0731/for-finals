const mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    database: 'inventory_system',
    user: 'root',
    password: ''
})

con.connect((err) => {
    if(err){
        console.log(err)
    }else{
        console.log('db connected')
    }
})

module.exports = con