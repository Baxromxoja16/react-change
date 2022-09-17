const { model, Schema } = require("mongoose");
const errorHandler = require("../utils/mongooseError");

const lessonSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title!'],
  },
  date: {
    type: String,
    required: [true, 'Please enter a date!'],
  },
});

lessonSchema.post('save', errorHandler);

module.exports = model("lessons", lessonSchema);
