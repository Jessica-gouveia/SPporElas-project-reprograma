const express = require('express')
const router = express.Router()
const controller = require('../controllers/culinariaController')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)

router.post('/cadastrar', controller.createRestaurant)

router.patch('/:id', controller.updateAnythingRestaurant)

router.delete('/:id', controller.deleteRestaurant)

module.exports = router