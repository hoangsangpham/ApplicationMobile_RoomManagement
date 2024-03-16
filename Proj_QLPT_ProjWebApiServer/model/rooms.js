const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    room_name: {
        require: true,
        type: String
    },
    room_price: {
        require: true,
        type: String
    },
    room_status: {
        require: true,
        type: String
    },
    // room_limit: {
    //     require: true,
    //     type: String
    // },
    room_deposit: {
        require: true,
        type: String
    },
    room_service: {
        require: true,
        type: String
    },
    room_describe: {
        require: true,
        type: String
    },
})

module.exports = mongoose.model('room', dataSchema)