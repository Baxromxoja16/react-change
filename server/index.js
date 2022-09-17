const express = require('express');
const app = express();
const cors = require('cors');

// dotenv config
require('dotenv').config();

// req body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static('./public/'));

// cors for frontend
const fronts = process.env.FRONT_URL.split(' ');
app.use(cors({ credentials: true, origin: fronts }));

// importing routes
const client = require('./routes/client/index');
const admin = require('./routes/admin/index');
const error = require('./middlewares/404');

// routing
app.use('/api', client);
app.use('/api/admin', admin);
app.use(error);

// connection to database
require('./helper/database')();

const PORT = normalizePort(process.env.PORT);

try {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (error) {
    console.log(error);
    process.exit();
};

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    };
    if (port >= 0) {
        return port;
    };
    return false;
};