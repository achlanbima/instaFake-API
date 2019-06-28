const router = require('express').Router()
const posts = require('../controllers/postController')

router.get('/', posts.showAll)
router.get('/:id', posts.showByUsers)
router.post('/', posts.createPost)
router.patch('/', posts.updatePost)
router.delete('/', posts.deletePost)

module.exports = router