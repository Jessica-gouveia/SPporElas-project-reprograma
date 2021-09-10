const Usuaria = require('../models/usuaria')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = async (req,res) => {
    const passwordWithHash = bcrypt.hashSync(req.body.senha,10)
    req.body.senha = passwordWithHash

    const usuaria = new Usuaria(req.body)

    try {
        const newUser = await usuaria.save()
        res.status(200).json(newUser)
    } catch (err) {
        res.status(400).json({'message': err.message })
    }
}

const login = (req,res) => {
    Usuaria.findOne({email: req.body.email}, (err, userFounded) => {
        if(!userFounded) {
            return res.status(404).send({'message': 'User not found', email: `${req.body.email}`})
        }

        const passwordTrue = bcrypt.compareSync(req.body.senha, userFounded.senha)
        if(!passwordTrue) {
            return res.status(401).send({'message': 'Unauthorized login '})
        }
        const token = jwt.sign({email: req.body.email}, SECRET)
        res.status(200).send({'message': 'Login successfully'})
    })
}

module.exports = {create,login}
