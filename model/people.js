const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'must provide a name!'],
        minLength: 2

    }
})

module.exports = mongoose.model('Person', PersonSchema) 