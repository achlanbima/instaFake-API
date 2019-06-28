const router = require('express').Router()
const posts = require('../controllers/postController')
const auth = require('../middleware/auth')

router.get('/', auth.auth ,posts.showAll)
router.get('/:id',auth.auth , posts.showByUsers)
router.post('/',auth.auth , posts.createPost)
router.patch('/',auth.auth , posts.updatePost)
router.delete('/',auth.auth , posts.deletePost)

module.exports = router