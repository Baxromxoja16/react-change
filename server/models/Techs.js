const { model, Schema } = require('mongoose');
const errorHandler = require("../utils/mongooseError");

const techsSchema = new Schema({
    image: {
        type: String,
        required: [true, 'Please choose a image!']
    },
    title: {
        type: String,
        required: [true, 'Please enter a title!']
    }
});

techsSchema.post('save', errorHandler);

module.exports = model('techs', techsSchema);