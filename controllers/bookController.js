const Books = require('../models/bookModel');

module.exports.getBooks = async (req, res) => {
    try {
        const data = await Books.find();
        return res.status(200).json({ msg: 'Success', data });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    };
};

module.exports.createBook = async (req, res) => {
    try {
        const { title, author, genre, price } = req.body;
        const newBook = new Books({
            title,
            author,
            genre,
            price,
        });
        await newBook.save();
        return res.status(200).json({ msg: 'Success', newBook });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports.updateBook = async (req, res) => {
    try {
        const { price } = req.body;
        const currentBook = await Books.findByIdAndUpdate(req.params.id, {
            price,
        });
        return res.status(200).json({ msg: 'Success', currentBook });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};

module.exports.deleteBook = async (req, res) => {
    try {
        await Books.findByIdAndDelete(req.params.id);
        return res.status(200).json({ msg: 'Success' });
    }
    catch (err) {
        return res.status(500).json({ msg: err.message });
    }
};
