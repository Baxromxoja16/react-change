const { Schema, model } = require('mongoose');
const errorHandler = require("../utils/mongooseError");

const courseSchema = new Schema({
    bg: {
        type: String,
        required: [true, 'Please enter a background image: jpg, jpeg, png!']
    },
    image: {
        type: String,
        required: [true, 'Please enter a image!']
    },
    title: {
        type: String,
        required: [true, 'Please enter a title!']
    },
    description: {
        type: String,
        required: [true, 'Please enter a description!']
    },
    duration: {
        type: String,
        required: [true, 'Please enter a duration!']
    },
    format: {
        type: String,
        required: [true, 'Please enter a format!']
    },
    price: {
        type: String,
        required: [true, 'Please enter a price!']
    },
    forWho: {
        type: [{
            title: { type: String, required: [true, 'Please enter a for who title!'] },
            description: { type: String, required: [true, 'Please enter a for who description!'] },
        }],
        required: true
    },
    learnList: [{
        title: { type: String, required: [true, 'Please enter a learn list title!'] },
        description: { type: String, required: [true, 'Please enter a learn list description!'] },
        learnImage: { type: String, required: [true, 'Please enter a learn list image!'] },
    }],
    salary: {
        type: String,
        required: [true, 'Please enter a salary!']
    },
    salaryInfo: {
        type: String,
        required: [true, 'Please enter a salary info!']
    },
    salaryDesc: {
        type: String,
        required: [true, 'Please enter a salary description!']
    },
    program: [{
        title: {
            type: String,
            required: [true, 'Please enter a program list!']
        }
    }],
});

courseSchema.post('save', errorHandler);

module.exports = model('courses', courseSchema)