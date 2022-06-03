const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
});

app.use("/assets", express.static(path.join(__dirname, "/public/assets")));
app.use("/stylesheet", express.static(path.join(__dirname, "/public/stylesheet")));

module.exports = router;