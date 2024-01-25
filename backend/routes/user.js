const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();
const signupRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.deleteUser);

signupRouter.post('/', userController.addUser);

module.exports = { userRouter, signupRouter };
