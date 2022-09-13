const fs = require('fs');
const path = require('path');

module.exports = function (filePath, custom = false) {
    console.log(filePath);
    fs.unlink(custom ? path.join(...custom) : path.join(__dirname, '..', 'public', ...filePath), (err) => {
        if (err) console.log(err);
    });
};