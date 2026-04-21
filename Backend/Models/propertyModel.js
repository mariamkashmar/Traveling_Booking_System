const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
    propertyname: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    city: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    guests: {
        type: String,
        required: true,
        min: 1
    },

    description: {
        type: String,
        required: true
    },

});

const Property = mongoose.model('Property', propertySchema)
module.exports = Property;