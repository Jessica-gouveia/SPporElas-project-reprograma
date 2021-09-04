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
    museuUm: {
        type: Array,
        required: true,
    },
    museuDois: {
        type: Array,
        required: true,
    },
    museuTres: {
        type: Array,
        required: true,
    },
    teatro: {
        type: Array,
        required: true,
    },
    parque: {
        type: Array,
        required: true,
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }


})

module.exports = mongoose.model('cultural', culturalSchema)




