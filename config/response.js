'use strict'

exports.send = (values, res) => {
  const data = {
    'status' : res.statusCode,
    'data' : values
  }
  res.json(data);
  res.end()
}