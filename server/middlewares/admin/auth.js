const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
    try {
        const token = req.headers.token;
        const user = jwt.verify(token, secret);
        if (user) {
            next();
        } else {
            res.status(400).json({ ok: false, message: 'You are not logined!' });
        }
    } catch (error) {
        res.status(400).json({ ok: false, message: 'You are not logined!' });
    }
}