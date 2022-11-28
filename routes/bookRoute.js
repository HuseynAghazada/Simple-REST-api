const express = require('express');
const { getBooks, deleteBook, updateBook, createBook } = require('../controllers/bookController');
const router = express.Router();

router.route('/getBooks')
    .get(getBooks);

router.route('/createBook')
    .post(createBook);

router.route('/updateBook/:id')
    .patch(updateBook);

router.route('/deleteBook/:id')
    .delete(deleteBook);

module.exports = router;