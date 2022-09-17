module.exports = (error, doc, next) => {
    if (error && error.errors) {
        const errorKeys = Object.keys(error.errors);
        const message = error.errors[errorKeys[errorKeys.length - 1]].message;
        throw message;
    }
    next();
};