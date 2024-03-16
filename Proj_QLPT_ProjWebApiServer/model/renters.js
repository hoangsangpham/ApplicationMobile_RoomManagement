const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    renter_name: {
        require: true,
        type: String
    },
    renter_phone: {
        require: true,
        type: String
    },
    // renter_email: {
    //     require: true,
    //     type: String
    // },
    renter_dateofbirth: {
        require: true,
        type: String
    },
    renter_cccd: {
        require: true,
        type: String
    },
    renter_address: {
        require: true,
        type: String
    },
    renter_room: {
        require: true,
        type: String
    },
})

module.exports = mongoose.model('renter', dataSchema)