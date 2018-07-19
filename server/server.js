const express = require('express');
const bodyParser = require('body-parser');

const seedData = require('./seed-data');
const burgersController = require('../controllers/burgers-controller');

const app = express();

// middleware used to add json parser to express to read incoming requests as json
app.use(bodyParser.json());

// GET method to list all burgers
app.get('/api/burgers', burgersController.listAllBurgers);
// GET method to find burger by id
app.get('/api/burgers/:id', burgersController.findBurgerById);
// POST method to save burger
app.post('/api/burgers', burgersController.saveBurger);
// PUT method to update burger
app.put('/api/burgers', burgersController.updateBurger);
// DELETE method to remove burger by id
app.delete('/api/burgers/:id', burgersController.removeBurger);

// app.listen(3000, () => {
//     // method to seed mongodb database with list of burgers
//     seedData.removeAndSeedData();
//     console.log('listening on port 3000');
// });

seedData.removeAndSeedData().then(() => {
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
});