const jwt = require('jsonwebtoken')
const response = require('../config/response')
require('dotenv').config()

exports.auth = (req, res, next) => {
  try{
    const token = req.headers.token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded
    next()
  }catch(err){
    response.tokenError(err, res)
  }
}