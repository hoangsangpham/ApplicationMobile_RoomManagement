const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    service_name: {
        require: true,
        type: String
    },
    service_charge: {
        require: true,
        type: String
    },
    service_unit: {
        require: true,
        type: String
    },
    service_describe: {
        require: true,
        type: String
    },
})

module.exports = mongoose.model('service', dataSchema)