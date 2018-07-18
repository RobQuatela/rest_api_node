const {mongoose} = require('../server/mongoose');

const Burger = mongoose.model('Burger', {
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, 'Burger');

module.exports = {
    Burger
};