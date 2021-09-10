const mongoose = require('mongoose')

const Culinaria = require('../models/culinaria')

const getAll = async (req,res) => {
    const foodPlaces = await Culinaria.find().populate('cultural')
    res.status(200).json(foodPlaces)
}

const getById = async (req,res) => {
    const requestedId = req.params.id 
    const filteredId = await Culinaria.find({id: requestedId})
    if(filteredId) {
        res.json(filteredId)
    } else {
        res.status(404).json({'message': 'ID not found'})
    }

    res.status(200).send(filteredId)

}

const createRestaurant = async (req,res) => {
    const culinarias = new Culinaria ({
        _id: new mongoose.Types.ObjectId(),
        restaurantes: req.body.restaurantes,
        cultural: req.body.cultural

    })

    try{
        const newRestaurant = await culinarias.save()
        res.status(200).json(newRestaurant)
    } catch (err) {
        res.status(400).json({'message': err.message})
    }
// INCLUIR LISTA DE RESTAURANTES  
 
      const restaurantIncluding = async (req,res) => {
        try {
            const restaurantInsert = await Culinaria.findById(req.parms.id)
            if(restaurantInsert == null) {
                return res.status(400).json({'message': 'Restaurant not found'})
            } else {
                Culinaria.findByIdAndUpdate(
                    {_id: req.body.id},
                    {...restaurantIncluding},
                    {$push: {restaurantes: req.body.restaurantes}})
                    Culinaria.populate('restaurantes')
                    res.status(200).json({'message': 'Restaurant succesfully added', restaurantInsert})
                
            }
        }
        catch (err) {
            res.status(500).json({'message': err.message})
        } 
    }
 
    
}

const updateAnythingRestaurant = async (req,res) => {
    const food = await Culinaria.findById(req.params.id)
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
    const foodPlaces = await Culinaria.findById(req.params.id)
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


module.exports = {
     getAll,
     getById,
     createRestaurant,
     updateAnythingRestaurant,
     deleteRestaurant}


