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

techsSchema.post('save', (error, doc, next) => {
    if (error && error.errors) {
        const errorKeys = Object.keys(error.errors);
        const message = error.errors[errorKeys[errorKeys.length - 1]].message;
        throw message
    }
    next();
});

module.exports = model('tech', techsSchema);