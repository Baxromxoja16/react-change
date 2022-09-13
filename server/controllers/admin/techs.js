const Tech = require("../../models/Techs");
const deleteFile = require('../../utils/deleteFile');

module.exports.getAll = async (req, res) => {
  const techs = await Tech.find();
  res.json({ ok: true, techs });
};

module.exports.addNew = async (req, res) => {
  try {
    if (req.file) req.body.image = "/uploads/techs/" + req.file.filename;
    await Tech.create(req.body);
    res.json({ ok: true, message: "Item is successfully created!" });
  } catch (message) {
    res.status(400).json({ ok: false, message });
  };
};

module.exports.updateOne = async (req, res) => {
  try {
    const updated = await Tech.findByIdAndUpdate(req.params.id, req.body);
    if (updated)
      res.json({ ok: true, message: "Item is successfully updated!" });
    else throw "";
  } catch (message) {
    res.status(400).json({ ok: false, message: "Item is not found!" });
  };
};

module.exports.deleteOne = async (req, res) => {
  try {
    const deleted = JSON.parse(JSON.stringify(await Tech.findByIdAndDelete(req.params.id)));
    if (deleted) {
      deleteFile([deleted.image]);
      return res.json({ ok: true, message: "Item is successfully deleted!" });
    } else throw "";
  } catch (message) {
    res.status(400).json({ ok: false, message: "Item is not found!" });
  };
};
