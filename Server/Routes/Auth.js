const express = require('express')
const { authLogin } = require('../Controller/AuthController')

const router = express.Router()

router.get('/', authLogin)

module.exports = router

//should be replace the get request into post request