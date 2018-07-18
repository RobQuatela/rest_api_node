const {ObjectId} = require('mongodb');

const {Burger} = require('../models/burger');

const listAll = () => {
    return Burger.find();
};

const findById = (id) => {
    return Burger.findById(new ObjectId(id));
};

const save = (burger) => {
    const burgerSave = new Burger({
        name: burger.name,
        price: burger.price
    });

    return burgerSave.save();
};

const update = (burger) => {
    return Burger.updateOne(burger);
};

const remove = (id) => {
    const burger = findById(id);
    return Burger.deleteOne(burger);
}

module.exports = {
    listAll,
    findById,
    save,
    update,
    remove
};