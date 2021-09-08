const express = require('express')
const router = express.Router()
const controller = require('../controllers/culturalController')

router.get('/', controller.getAll)

router.get('/:id', controller.getById)

router.post('/cadastrar', controller.createItinerary)

router.patch('/:id', controller.updateOne)
router.patch('/atualizar/:id', controller.updateAnything)

router.delete('/:id', controller.deleteItinerary)

module.exports = router