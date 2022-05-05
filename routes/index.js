const pharmacyRoutes = require('./pharmacies');

const constructorMethod = (app) => {
  app.use('/', pharmacyRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
  });
};

module.exports = constructorMethod;