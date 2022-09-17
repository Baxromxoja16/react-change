module.exports = (req, res) => {
    res
        .status(404)
        .json({ ok: false, message: "404 Error: Path is not defined!" });
};