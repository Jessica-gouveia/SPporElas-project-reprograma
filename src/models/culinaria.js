const mongoose = require('mongoose')

const culinariaSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    restaurantes: [{
        nome: {
            type: String,
            required: true,
        },
        endereco: {
            type: String,
            required: true,
        },
        funcionamento: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        cultural: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'cultural',
        },
        criadoEm: {
            type: Date,
            required: true,
            default: new Date
        }
    }]
})

module.exports = mongoose.model('culinaria', culinariaSchema)