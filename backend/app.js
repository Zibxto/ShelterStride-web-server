const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.use("/users", userRouter);

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