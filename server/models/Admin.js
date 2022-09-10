const { model, Schema } = require('mongoose');

const adminSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name!'],
        minlength: [2, 'Enter a name of at least 2 letters']
    },
    username: {
        type: String,
        required: [true, 'Please enter a username!'],
        minlength: [4, 'Enter a username of at least 4 letters']
    },
    phone: {
        type: String,
        required: [true, 'Please enter a phone name!'],
        minlength: [6, 'Enter a phone of at least 6 letters']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password!'],
    }
});

userSchema.post('save', (error, doc, next) => {
    if (error) {
        if (error.code == 11000) {
            const key = Object.keys(error.keyValue)[0];
            throw `This ${key} is already registered`
        }
        const errorKeys = Object.keys(error.errors);
        const message = error.errors[errorKeys[errorKeys.length - 1]].message;
        throw message
    }
    next();
});

module.exports = model('admin', adminSchema);