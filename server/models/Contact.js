const { Schema, model } = require('mongoose');
const errorHandler = require("../utils/mongooseError");

const contactSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name']
    },
    phone: {
        type: String,
        required: [true, 'Please enter a phone number']
    }
});

contactSchema.post('save', errorHandler);

module.exports = model('contacts', contactSchema);