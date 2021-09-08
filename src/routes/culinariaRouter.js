const express = require('express')
const router = express.Router()
const controller = require('../controllers/culinariaController')

router.get('/', controller.getAll)

router.post('/cadastrar', controller.createRestaurant)

module.exports = router