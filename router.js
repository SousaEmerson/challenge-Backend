const { Router } = require('express')

const UserController = require('./src/controller/user')

const router = Router()

router.get('/user', UserController.get)
router.post('/user', UserController.post)

module.exports = router
