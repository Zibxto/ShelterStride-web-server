const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

// bookRouter.get('/', userController.getusers);
// bookRouter.get('/:id', bookController.getBookById);
userRouter.post('/', userController.addUser);
// bookRouter.put('/:id', bookController.updateBook);
// bookRouter.delete('/:id', bookController.deleteBook);

module.exports = userRouter;