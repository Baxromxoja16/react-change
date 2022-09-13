const Lesson = require("../../models/Lesson");

module.exports.getAll = async (req, res) => {
  const lessons = await Lesson.find();
  res.json({ ok: true, lessons });
};

module.exports.addNew = async (req, res) => {
  try {
    await Lesson.create(req.body);
    res.json({ ok: true, message: "Lesson is successfully created!" });
  } catch (message) {
    res.status(400).json({ ok: false, message });
  };
};

module.exports.updateOne = async (req, res) => {
  try {
    const updated = await Lesson.findByIdAndUpdate(req.params.id, req.body);
    if (updated)
      res.json({ ok: true, message: "Lesson is successfully updated!" });
    else throw "";
  } catch (message) {
    res.status(400).json({ ok: false, message: "Lesson is not found!" });
  }
};

module.exports.deleteOne = async (req, res) => {
  try {
    const deleted = await Lesson.findByIdAndDelete(req.params.id);
    if (deleted)
      res.json({ ok: true, message: "Lesson is successfully deleted!" });
    else throw "";
  } catch (message) {
    res.status(400).json({ ok: false, message: "Lesson is not found!" });
  }
};
