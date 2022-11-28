const express = require('express');
const dotenv = require('dotenv');
const bookRoute = require('./routes/bookRoute');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then((res) => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

// middlewares
app.use(express.json());
app.use('/books', bookRoute);

const server = app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is started on port ${process.env.PORT}`);
});