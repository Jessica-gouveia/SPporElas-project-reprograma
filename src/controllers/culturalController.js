const mongoose = require('mongoose')
const Art = require('../models/cultural')

const getAll = async (req,res) => {
    const culture = await Art.find()
    res.status(200).json(culture)
}

//const getById = 

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
    const itineraryAlredyExists = await Itinerary.findOne({nome: req.body.nome})
    if(itineraryAlredyExists) {
        return res.status(404).json({error: 'Itinerário já cadastrado'})
    }
    try{
        const newItinerary = await itinerary.save()
        res.status(200).json(newItinerary)
    } catch (err) {
        res.status(400).json({message: err.message})

    }
}

module.exports = {getAll, createItinerary}