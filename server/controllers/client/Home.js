const Techs = require('../../models/Techs')

module.exports.home = async (req, res) => {
    const techs = await Techs.find();
    res.json({ ok: true, techs });
}