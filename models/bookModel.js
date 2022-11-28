const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    price: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('book', bookSchema);