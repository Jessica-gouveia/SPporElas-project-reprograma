const mongoose = require('mongoose')
const Itinerary = require('../models/cultural')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const getAll = async (req,res) => {
    const cultureTour = await Itinerary.find()
    res.status(200).json(cultureTour)
}

const getById = async (req,res) => {
    const requestedId = req.params.id 
    const filteredId =  await Itinerary.find({id: requestedId})
    if(filteredId) {
        res.json(filteredId)
    } else{
        res.status(404).json({'message': 'ID not found'})
    }

    res.status(200).send(filteredId)

}

const createItinerary = async (req,res) => {

    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(authHeader == undefined) {
        return res.status(403).send({message: "Please send an authorization"})
    }
    jwt.verify(token, SECRET, async (err) => {
        if(err){
          res.status(403).send({message: "invalid token", err})
        }
        const itineraryPlace = await Itinerary.find()
    })

    const itinerary = new Itinerary ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        profissao: req.body.profissao,
        biografia: req.body.biografia,
        foto: req.body.foto,
        museus: req.body.museus,
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

    const museumIncluding = async (req,res) => {
        try {
            const museumInsert = await Itinerary.findById(req.params.id)
            if(museumInsert == null) {
                return res.status(400).json({'message': 'Itinerary not found'})
            } else{
                 Itinerary.findByIdAndUpdate(
        
                   {_id: req.body.id},
                   {...museumIncluding},
                    {$push: {museus:req.body.museus}})
                   Itinerary.populate('museus')
                   res.status(200).json({'message': 'Museum successfully added to itinerary', museumInsert})
                    

            } 
            

        
        }

    catch (error) {
        res.status(500).json({'message': error.message})
    }
    
}

const theaterIncluding = async (req,res) => {
    try {
        const theaterInsert = await Itinerary.findById(req.params.id)
        if(theaterInsert == null) {
            return res.status(400).json({'message': 'Itinerary not found'})
        } else {
            Itinerary.findByIdAndUpdate(
                {_id: req.body.id},
                {...theaterIncluding},
                {$push: {teatro: req.body.teatro}})
                Itinerary.populate('teatro')
                res.status(200).json({'message': 'Theater successfully added to itinerary', theaterInsert})
            
        }
    }
    catch (error) {
        res.status(500).json({'message': error.message})
    }
}

const parkIncluding = async (req,res) => {
    try{
        const parkInsert = await Itinerary.findById(req.res.id)
        if(parkInsert == null) {
            return res.status(400).json({'message': 'Itinerary not found'})
        } else {
            Itinerary.findByIdAndUpdate(
                {_id: req.body.id},
                {...parkIncluding},
                {$push: {parque: req.body.parque}})
                Itinerary.populate('parque')
                res.status(200).json({'message': 'Park succesfully added to itinerary', parkInsert})
              
        }
    }
    catch (error) {
        res.status(500).json({'message': error.message})
    }
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

const updateAnything = async (req,res) => {
    const itinerary = await Itinerary.findById(req.params.id)
    if(itinerary == null) {
        return res.status(404).json({'message': 'Information not found'})
    }
    const updateItinerary = req.body
    if(updateItinerary != null) {
        let keyList = Object.keys(updateItinerary)
        keyList.forEach((update) => {
            itinerary[update] = updatedItinerary[update]
        })
    }
    const itineraryUpdated = await itinerary.save()
    res.status(200).json({itineraryUpdated})
}

const deleteItinerary = async (req,res) => {

    const authHeader = req.get('authorization')
    const token = authHeader.split(' ')[1]
    if(authHeader == undefined){
        return res.status(403).send({'message': 'Please send an authorization'})
    }
    jwt.verify(token, SECRET, async (err)=> {
        if(err){
            res.status(403).send({message: "Invalid token"})
        }
        const itineraryPlace = await Itinerary.find()
        res.json(itineraryPlace)
    })
  
    const cultureTour = await Itinerary.findById(req.params.id)
    if(cultureTour == null) {
        return res.status(404).json({'message': 'Itinerary not found'})
        
    }

    try{
        await cultureTour.remove()
        res.status(200).json({'message': 'Itinerary successfully deleted!'})

    } catch (error) {
        res.status(500).json({'message': error.message})
    }
}
module.exports = {getAll, getById, createItinerary, updateOne, updateAnything, deleteItinerary}