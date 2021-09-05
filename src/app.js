const express = require('express')
const app = express()
const cors = require('cors')
//require('dotenv-safe').config()

app.use(cors())
app.use(express.json())

const db = require('./data/database')
db.connect()

const indexRouter = require('./routes/index')
app.use('/index', indexRouter)

const culturalRouter = require('./routes/culturalRouter')
app.use('/cultural', culturalRouter)

const culinariaRouter = require('./routes/culinariaRouter')
app.use('/culinaria', culinariaRouter)

/* const usuariaRouter = require('./routes/usuariaRouter')
app.use('/usuaria', usuariaRouter) */

module.exports = app

