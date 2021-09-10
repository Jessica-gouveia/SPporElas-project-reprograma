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
        criadoEm: {
            type: Date,
            required: true,
            default: new Date
        }
    }],
    cultural: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'cultural'
    },
    
}, {versionKey: false})

const culinaria = mongoose.model('culinaria', culinariaSchema)
module.exports = culinaria