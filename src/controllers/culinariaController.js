const mongoose = require('mongoose')

const Food = require('../models/culinaria')

const getAll = async (req,res) => {
    const foodPlaces = await Food.find().populate('cultural')
    res.status(200).json(foodPlaces)
}

const createRestaurant = async (req,res) => {
    const restaurants = new Restaurant ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.name,
        endereco: req.body.endereco,
        funcionamento: req.body.funcionamento,
        cultural: req.body.cultural,
        criadoEm: req.body.criadoEm

    
    })
}

module.exports = {getAll, createRestaurant}
