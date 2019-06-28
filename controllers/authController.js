const response = require('../config/response')
const connection = require('../models/dbConnection')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.signUp = (req, res) => {
  const email = req.body.email
  const password = bcrypt.hashSync(req.body.password,12)
  const username = req.body.username
  const profile_pic = req.body.profile_pic

  connection.query(`SELECT* FROM users WHERE email='${email}'`, (err, rows, fields) => {
    if(err){
      response.send(err.message, res)
    }else{
      if(rows.length!=0){
        response.send('email already used', res)
      }else{
        connection.query(`INSERT INTO users VALUES (null, '${email}', '${password}', '${username}', '${profile_pic}', 0,0)`, (err, rows, fields) => {
          if(err){
            response.send(err.message, res)
          }else{
            response.send('user created!', res)
          }
        })
      }
    }
  })

}

exports.signIn = (req, res) => {
  const email = req.body.email
  const password = req.body.password

  connection.query(`SELECT* FROM users WHERE email='${email}'`, (err, rows, fields) => {
    if(err){
      response.send(err.message, res)
    }else{
      if(bcrypt.compareSync(password, rows[0].password)){
        const token = jwt.sign({id: rows[0].id, email: rows[0].email, username: rows[0].username, profile_pic:rows[0].profile_pic}, process.env.SECRET_KEY)
        if(token) {
          const decode = jwt.verify(token, process.env.SECRET_KEY)
          response.send({token:token, user:decode}, res)
        }
      }else{
        response.send('Wrong Password', res)
      }
    }
  })
}