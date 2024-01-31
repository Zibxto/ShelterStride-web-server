const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
// const booksRoute = require('./routes/books');
require('dotenv').config();
require("./authentication/auth"); // Signup and login authentication middleware
const { userRouter, signupRouter, donationRouter } = require('./routes/user');
const authRoute = require('./routes/auth');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/v1/signup", signupRouter);

app.use('/api/v1/', authRoute);
// app.use('/books', passport.authenticate('jwt', { session: false }), booksRoute);
app.use("/api/v1/users", passport.authenticate('jwt', { session: false }), userRouter);
app.use("/api/v1/donations", passport.authenticate('jwt', { session: false }), donationRouter);

app.get('/api/v1/', (req, res) => {
    res.send('Welcome to the ShelterStride API');
})

app.use((err, req, res, next) => {
    // console.log(err);
    if(err.name === 'SequelizeUniqueConstraintError') {
        res.json({
            message: 'Email already exists'
        })
    }
    res.status(500).json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})