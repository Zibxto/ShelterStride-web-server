const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();
const signupRouter = express.Router();
const donationRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/:id', userController.updateUser);
userRouter.put('/:id/logout', userController.logoutUser);
userRouter.delete('/:id', userController.deleteUser);
userRouter.post('/:id/donation', userController.addDonation);
userRouter.get('/:id/donation', userController.getUserByIdDonation);

signupRouter.post('/', userController.addUser);
donationRouter.get('/', userController.getDonations);

module.exports = { userRouter, signupRouter, donationRouter };
