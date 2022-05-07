const userRoutes = require('./main');
const doctorRoutes = require('./doctors');
const usersRoutes = require('./users');
const reviewsRoutes = require('./reviews');

const constructorMethod = (app) => {
app.use('/', userRoutes);
app.use('/review', doctorRoutes);
app.use('/review/reviews',reviewsRoutes);
app.use('/users',usersRoutes);

app.use('*', (req, res) => {
    res.sendStatus(404);
});
};

module.exports = constructorMethod;