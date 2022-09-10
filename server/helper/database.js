const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

module.exports = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to database!');
    } catch (error) {
        console.log(error);
        process.exit();
    }
};