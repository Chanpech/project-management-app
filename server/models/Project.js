const mongoose = require('mongoose');

//Create mongoose schema - diff from graphql schema
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId, //Whenever we create a new record in a collection that record will be assigned a ObjectId
        ref: 'Client', //Relating this to another model
    },
});

module.exports = mongoose.model('Project', ProjectSchema);