const express = require('express');
const bodyParser = require('body-parser');

const burgersController = require('../controllers/burgers-controller');

const app = express();

app.use(bodyParser.json());

// GET method to list all burgers
app.get('/api/burgers', burgersController.listAllBurgers);

// POST method to save burger
app.post('/api/burgers', burgersController.saveBurger);

app.listen(3000, () => {
    console.log('listening on port 3000');
});