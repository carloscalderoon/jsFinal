// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const superheroRoutes = require('./routes/superheroes');

// Registering our pageRoutes
// app.use('/', pageRoutes);
//app.use('/superheroes', superheroRoutes);

// Our routes
const routes = require("./routes.js");
app.use("/api", routes);

// Handles any requests that don't match the ones above
const root = path.join(__dirname, '/client/build');
app.use(express.static(root));
app.use((req, res, next) => {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root });
  } else next();
});

// Exporting the changes
module.exports = app;