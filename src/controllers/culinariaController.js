const mongoose = require('mongoose')

const Food = require('../models/culinaria')

const Itinerary = require('../models/cultural')

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

    const restaurantAlreadyExists = await Food.findOne({nome: req.body.nome})
    if(restaurantAlreadyExists) {
        return res.status(404).json({error: 'Restaurant already registered'})
    }
    try{
        const newRestaurant = await restaurant.save()
        res.status(200).json(newRestaurant)
    } catch (error) {
        res.status(400).json({'message': error.message})
    }

    const restaurantIncluding = async (req,res) => {
        try {
            const restaurantInsert = await Food.findById(req.params.id)
            if(restaurantInsert == null) {
                return res.status(400).json({'message': 'Restaurant not found'})
            } else {
                Food.findByIdAndUpdate(
                    {_id: req.body.id},
                    {...restaurantIncluding},
                    {$push: {restaurante: req.body.restaurante}})
                    Food.populate('restaurante')
                    res.status(200).json({'message': 'Restaurant succesfully added', restaurantInsert})
                
            }
        }
        catch (error) {
            res.status(500).json({'message': error.message})
        }
    }

}

module.exports = {getAll, createRestaurant}
