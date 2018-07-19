const burgersService = require('../services/burgers-services');

const listAllBurgers = (req, res) => {
    burgersService.listAll().then((docs) => {
        res.send({
            count: docs.length,
            result: docs
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

const findBurgerById = (req, res) => {
    burgersService.findById(req.params.id).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

const saveBurger = (req, res) => {
    burgersService.save(req.body).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

const updateBurger = (req, res) => {
    burgersService.update(req.body).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => {
        res.status(400).send(err);
    });
};

const removeBurger = (req, res) => {
    burgersService.remove(req.params.id).then((doc) => {
        res.send({deleted: true, result: doc});
    }, (err) => {
        res.status(400).send(err);
    });
};

module.exports = {
    listAllBurgers,
    findBurgerById,
    saveBurger,
    updateBurger,
    removeBurger
};