const Course = require("../../models/Course");

module.exports.getAll = async (req, res) => {
    const courses = await Course.find();
    res.json({ ok: true, courses });
};

module.exports.addNew = async (req, res) => {
    if (req.files.bg) req.body.bg = '/uploads/courses/' + req.files.bg.filename;
    if (req.files.image) req.body.image = '/uploads/courses/' + req.files.image.filename;
    if (req.files.learnImg) req.body.learnImg = '/uploads/courses/' + req.files.learnImg.filename;

    try {
        await Course.create(req.body);
        res.json({ ok: true, message: "Course is successfully created!" });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};

module.exports.updateOne = async (req, res) => {
    try {
        const updated = await Course.findByIdAndUpdate(req.params.id, req.body);
        if (updated)
            res.json({ ok: true, message: "Course is successfully updated!" });
        else throw "";
    } catch (message) {
        res.status(400).json({ ok: false, message: "Course is not found!" });
    }
};

module.exports.deleteOne = async (req, res) => {
    try {
        const deleted = await Course.findByIdAndDelete(req.params.id);
        if (deleted)
            res.json({ ok: true, message: "Course is successfully deleted!" });
        else throw "";
    } catch (message) {
        res.status(400).json({ ok: false, message: "Course is not found!" });
    }
};