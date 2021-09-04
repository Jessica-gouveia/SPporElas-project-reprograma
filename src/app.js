const express = require('express')
const app = express()
const cors = require('cors')
//require('dotenv-safe').config()

app.use(cors())
app.use(express.json())

const db = require('./data/database')
db.connect()

router.get("/oi", (req, res)=>{
    res.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})


const culturalRouter = require('./routes/culturalRouter')
app.use('/cultural', culturalRouter)

const culinariaRouter = require('./routes/culinariaRouter')
app.use('/culinaria', culinariaRouter)

/* const usuariaRouter = require('./routes/usuariaRouter')
app.use('/usuaria', usuariaRouter) */

module.exports = app

