const loginRoutes = require('./main');
const doctorRoutes = require('./doctors');
const usersRoutes = require('./users');
const reviewsRoutes = require('./reviews');
const pharmacyRoutes = require('./pharmacies');

const constructorMethod = (app) => {
app.use('/', loginRoutes);
app.use('/', pharmacyRoutes);
app.use('/review', doctorRoutes);
app.use('/review/reviews',reviewsRoutes);
app.use('/users',usersRoutes);

app.use('*', (req, res) => {
    res.sendStatus(404);
});
};

module.exports = constructorMethod;