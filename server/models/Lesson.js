const { model, Schema } = require("mongoose");

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

lessonSchema.post('save', (error, doc, next) => {
  if (error && error.errors) {
      const errorKeys = Object.keys(error.errors);
      const message = error.errors[errorKeys[errorKeys.length - 1]].message;
      throw message
  }
  next();
});

module.exports = model("lessons", lessonSchema);
