const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'instaClone'
})

con.connect((err) => {
  if(err) throw err
})

module.export = con