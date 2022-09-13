const { model, Schema } = require("mongoose");

const lessonSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = model("lessons", lessonSchema);
