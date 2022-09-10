const { model, Schema } = require('mongoose');

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

module.exports = model('tech', techsSchema);