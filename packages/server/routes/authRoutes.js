const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const loginLimiter = require('../middleware/loginLimiter')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/login')
    .post(loginLimiter, authController.login)



router.route('/refresh')
    .get(authController.refresh)


    //we want to clear cookies if one exists.
router.route('/logout')
    .post(authController.logout)

    module.exports = router