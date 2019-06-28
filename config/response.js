'use strict'

exports.send = (values, res) => {
  const data = {
    'status' : res.statusCode,
    'data' : values
  }
  res.json(data);
  res.end()
}

exports.tokenError = (err, res) => {
  const data = {
    'status': 401,
    'message' : err.message
  }
  res.json(data)
  res.end()
}