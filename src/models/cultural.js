const mongoose = require('mongoose')

const culturalSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true,
    },
    profissao: {
        type: String,
        required: true,
    },
    biografia: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    museus: [{
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
        }
        
    }],

    teatro: [{
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
        }

    }],

    parque: [{
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
        }
    }],


})

const cultural = mongoose.model('cultural', culturalSchema)
module.exports = cultural






