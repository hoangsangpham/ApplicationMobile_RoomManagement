const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    problem_room: {
        require: true,
        type: String
    },
    problem_time: {
        require: true,
        type: String
    },
    problem_name: {
        require: true,
        type: String
    },
    problem_status: {
        require: true,
        type: String
    },
    problem_level: {
        require: true,
        type: String
    },
    problem_describe: {
        require: true,
        type: String
    },
})

module.exports = mongoose.model('problem', dataSchema)