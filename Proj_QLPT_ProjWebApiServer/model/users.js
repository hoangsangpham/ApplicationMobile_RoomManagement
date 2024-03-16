const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    username: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
        
})

module.exports = mongoose.model('user', dataSchema)