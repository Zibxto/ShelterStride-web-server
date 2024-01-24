const db = require('../models');

// Get Models
const User = db.users

// Add CRUD controller functions
async function getUsers(req, res, next) {
    try {
        const users = await User.findAll()
        res.json(users)
    } catch (err) {
        next(err)
    }
}

async function getUserById(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id)
        res.json(user)
    } catch (err) {
        next(err)
    }
}

async function addUser(req, res, next) {
    let userInfo = req.body;
    try {
        const user = await User.create(userInfo);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }

}

async function updateUser(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json({"message": "User Updated Successfully", "data": user});
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({"message": "User Deleted Successfully", "data": user});
        } else {
            res.status(404).json({
                message: 'User not found'
            });
        }
    } catch (error) {
        next(error);
    }
}


module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}