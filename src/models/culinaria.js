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
        cultural: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cultural'
        },
        criadoEm: {
            type: Date,
            required: true,
            default: new Date
        }
    }]
    
},{strictPopulate: false})

module.exports = mongoose.model('culinaria', culinariaSchema)