const Admin = require('../../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports.loginPost = async (req, res) => {
    try {
        let user = JSON.parse(JSON.stringify(await Admin.findOne({ username: req.body.username.toLowerCase() })));
        const password = await bcrypt.compare(req.body.password, user.password);
        if (password) {
            delete user.password;
            const token = jwt.sign({ user }, secret, { expiresIn: '25min', algorithm: 'HS512' });
            res.json({ ok: true, message: 'You have successfully logged in!', token });
        } else {
            res.status(400).json({ ok: false, message: 'Username or password is incorrect' });
        };
    } catch (error) {
        res.status(400).json({ ok: false, message: 'Username or password is incorrect' });
    };
};

module.exports.registerPost = async (req, res) => {
    try {
        await checkAdmin();
        const message = await registerNewUser(req.body);
        res.json({ ok: true, message });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};

module.exports.getStatus = async (req, res) => {
    try {
        const token = req.headers.token;
        const user = jwt.verify(token, secret);
        res.json({ ok: true, ...user });
    } catch (error) {
        res.status(400).json({ ok: false, message: 'Not registered' });
    };
};

module.exports.checkAdmin = async (req, res) => {
    try {
        await checkAdmin();
        res.json({ ok: true, message: 'Admin is not registered yet!' });
    } catch (message) {
        res.status(400).json({ ok: false, message });
    };
};

module.exports.registerNewUser = registerNewUser;

async function checkAdmin() {
    return new Promise(async (resolve, reject) => {
        const admins = await Admin.find();
        if (admins.length <= 0) resolve();
        else reject('Admin is already registered!');
    });
};

async function registerNewUser(data) {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.username) data.username = data.username.replace(/[^a-z0-9]/gi, '');
            if (data.phone) data.phone = data.phone.replace(/[^0-9]+/g, "");

            if (data.password && data.password.length < 8)
                throw 'Enter a Password of at least 4 letters';

            if (data.password) data.password = await bcrypt.hash(data.password, 10);
            await Admin.create(data);
            resolve('Account created successfully.');
        } catch (error) {
            reject(error);
        };
    });
};