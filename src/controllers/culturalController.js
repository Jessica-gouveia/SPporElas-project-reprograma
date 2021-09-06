const mongoose = require('mongoose')
const Tour = require('../models/cultural')

const getAll = async (req,res) => {
    const cultureTour = await Tour.find()
    res.status(200).json(cultureTour)
}

const getById = async (req,res) => {
    const requestedId = req.params.id 
    const filteredId = Tour.find(tour => tour.id == requestedId)

    res.status(200).send(filteredId)

}

const createItinerary = async (req,res) => {
    const itinerary = new Itinerary ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        profissao: req.body.profissao,
        biografia: req.body.biografia,
        foto: req.body.foto,
        museuUm: req.body.museuUm,
        museuDois: req.body.museuDois,
        museuTres: req.body.museuTres,
        teatro: req.body.teatro,
        parque: req.body.parque,
        criadoEm: req.body.criadoEm
    })
    const itineraryAlreadyExists = await Itinerary.findOne({nome: req.body.nome})
    if(itineraryAlreadyExists) {
        return res.status(404).json({error: 'Itinerary already registered'})
    }
    try{
        const newItinerary = await itinerary.save()
        res.status(200).json(newItinerary)
    } catch (error) {
        res.status(400).json({message: error.message})

    }
}

const updateOne = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        if(itinerary == null) {
            return res.status(404).json({'message': 'Itinerary not found'})
        }
        if(req.body.nome != null) {
            itinerary.nome = req.body.nome
        }
        const updatedItinerary = await itinerary.save()
        res.status(200).json(updatedItinerary)
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
}

const deleteItinerary = async (req,res) => {
    const cultureTour = await Tour.findById(req.params.id)
    if(cultureTour == null) {
        return res.status(404).json({'message': 'Itinerary not found'})
        
    }

    try{
        await cultureTour.remove()
        res.status(200).json({'message': 'Itinerary successfully deleted!'})

    } catch (error) {
        res.status(500).json({'message': 'error.message'})
    }
}
module.exports = {getAll, getById, createItinerary, updateOne, deleteItinerary}