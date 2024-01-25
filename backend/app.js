const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
// const booksRoute = require('./routes/books');
const { userRouter, signupRouter } = require('./routes/user');
const authRoute = require('./routes/auth');
require('dotenv').config();

require("./authentication/auth") // Signup and login authentication middleware

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', authRoute);
// app.use('/books', passport.authenticate('jwt', { session: false }), booksRoute);

app.use("/signup", signupRouter);
app.use("/users", passport.authenticate('jwt', { session: false }), userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the ShelterStride API');
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})