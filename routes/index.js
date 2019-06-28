const router = require('express').Router();
const posts = require('./posts')
const auth = require('../controllers/authController')



router.post('/signUp', auth.signUp)
router.post('/signIn', auth.signIn)
router.use('/posts', posts)


module.exports = router