const Contact = require('../../models/Contact');

module.exports.getAll = async (req, res) => {
    const list = await Contact.find();
    res.json({ ok: true, list });
};

module.exports.deleteOne = async (req, res) => {
    try {
        const deleted = await Contact.findByIdAndDelete(req.params.id);
        if (deleted)
            res.json({ ok: true, message: "Item is successfully deleted!" });
        else throw "";
    } catch (message) {
        res.status(400).json({ ok: false, message: "Item is not found!" });
    }
};

module.exports.addNew = async (req, res) => {
    try {
        await Contact.create(req.body);
        res.json({ ok: true, message: "Successfully sent!" });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};