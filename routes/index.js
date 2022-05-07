const searchRoutes = require('./doctor');

const constructorMethod = (app) => {
    app.use('/', searchRoutes);

    app.use('*', (req, res) => {
        res.status(404).json({error: 'Route Not Found'});
    });
};

module.exports = constructorMethod;