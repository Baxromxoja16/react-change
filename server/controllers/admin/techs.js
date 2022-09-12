const Techs = require('../../models/Techs');

module.exports.getAll = async (req, res) => {
    const techs = await Techs.find();
    res.json({ ok: true, techs });
}

module.exports.addNew = async (req, res) => {
    try {
        await Techs.create(req.body);
        res.json({ ok: true, message: 'Item is successfully created!' });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    }
}

module.exports.updateOne = async (req, res) => {
    try {
        await Techs.findByIdAndUpdate(req.params.id, req.body);
        res.json({ ok: true, message: 'Item is successfully created!' });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};

module.exports.deleteOne = async (req, res) => {
    try {
        await Techs.findByIdAndDelete(req.params.id);
        res.json({ ok: true, message: 'Item is successfully deleted!' });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};