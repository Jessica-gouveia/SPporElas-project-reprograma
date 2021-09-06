const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.status(200).send({
        'message': 'Seja bem vinde à API São Paulo por Elas!',
        'message': 'Você conhecerá a cidade sob o olhar e história de vida de mulheres incríveis!',
        'message': 'Existe sim amor em SP <3 '
    })
})

module.exports = router