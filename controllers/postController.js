'use strict'

const response = require('../config/response')
const connection = require('../models/dbConnection')

exports.index = (req, res) => {
  response.ok('Hello this is controller post', res)
}

exports.showAll = (req, res) => {
  connection.query(`SELECT* FROM v_posts`, (err, rows, fields) => {
    if(err){
      response.send(err, res)
    }else{
      response.send(rows, res)
    }
  })
}

exports.showByUsers = (req, res) => {
  const id = req.params.id
  connection.query(`SELECT*FROM v_posts WHERE id = ${id}`, (err, rows, fields) => {
    if(err){
      response.send(err, res)
    }else{
      response.send(rows, res)
    }
  })
}

exports.createPost = (req, res) => {
  const post = req.body.post
  const caption = req.body.caption
  const user_id = req.body.user_id

  connection.query(`INSERT INTO posts VALUES (null, '${post}','${caption}', '${user_id}', null)`, (err, rows, fields) => {
    if(err){
      response.send(err, res)
    }else{
      response.send('added posts', res)
    }
  })
}

exports.updatePost = (req, res) => {
  const caption = req.body.caption
  const id = req.body.id

  connection.query(`UPDATE posts SET caption = '${caption}' WHERE id='${id}'`, (err, rows, fields) => {
    if(err){
      response.send(err, res)
    }else{
      response.send("post updated", res)
    }
  })
}

exports.deletePost = (req, res) => {
  const id = req.params.id

  connection.query(`DELETE FROM posts WHERE id = '${id}'`, (err, rows, fields) => {
    if(err){
      response.send(err, res)
    }else{
      response.send('post deleted', res)
    }
  })
}