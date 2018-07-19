const {Burger} = require('../models/burger');

const removeAndSeedData = () => {
    // remove method removes all documents from collection
    return Burger.remove({}).then(() => {
        // remove method is a promise, so on resolving the promise, we seed the collection with new documents
        // create method is also a promise, which if used, would bring in the result of the newly added documents
        Burger.create([
            new Burger({
                name: 'Cheeseburger',
                price: 8.75
            }),
            new Burger({
                name: 'Plain Hamburger',
                price: 5.75
            }),
            new Burger({
                name: 'Kids Burger',
                price: 4.75
            }),
            new Burger({
                name: 'Turkey Burger',
                price: 8.75
            }),
            new Burger({
                name: '1lb Burger',
                price: 12.75
            })
        ]);
    });
};

module.exports = {
    removeAndSeedData
};