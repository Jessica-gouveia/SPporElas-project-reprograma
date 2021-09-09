const mongoose = require('mongoose')

const Food = require('../models/culinaria')

const Itinerary = require('../models/cultural')

const getAll = async (req,res) => {
    const foodPlaces = await Food.find().populate('cultural')
    res.status(200).json(foodPlaces)
}

const getById = async (req,res) => {
    const requestedId = req.params.id 
    const filteredId = Food.find(eat => eat.id == requestedId)

    res.status(200).send(filteredId)

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
// INCLUIR LISTA DE RESTAURANTES  
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

const updateAnythingRestaurant = async (req,res) => {
    const food = await Food.findById(req.params.id)
    if(food == null) {
        return res.status(404).json({'message': 'Information not found, please try again'})
    }
    const updateFood = req.body
    if(updateFood != null) {
        let keyList = Object.keys(updateFood)
        keyList.forEach((update) => {
            food[update] = updateFood[update]
        })
    }
    const restaurantUpdated = await food.save()
    res.status(200).json({restaurantUpdated})
}

const deleteRestaurant = async (req,res) => {
    const foodPlaces = await Food.findById(req.params.id)
    if(foodPlaces == null) {
        return res.status(404).json({'message': 'Restaurant not found'})
    }

    try{
        await foodPlaces.remove()
        res.status(200).json({'message': 'Restaurant succesfully deleted!'})
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
}


module.exports = {getAll, getById, createRestaurant, updateAnythingRestaurant, deleteRestaurant}
