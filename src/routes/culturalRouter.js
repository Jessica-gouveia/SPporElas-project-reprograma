const express = require('express')
const router = express.Router()
const controller = require('../controllers/culturalController')

router.get('/', controller.getAll)

//router.get('/:id', controller.getById)

router.post('/cadastrar', controller.createItinerary)
module.exports = router