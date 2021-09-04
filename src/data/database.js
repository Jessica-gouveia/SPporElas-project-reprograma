const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost:27017/sp-delas', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(console.log('Database conectada com sucesso!'))
.catch(err => console.err)
}

module.exports = {connect}