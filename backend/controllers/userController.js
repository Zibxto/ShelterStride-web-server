const db = require('../models');

// Get Models
const User = db.users

// Middleware function to check user rank
async function checkUserRank(req, res, next) {
    try {
        // Assuming you have some way to identify the authenticated user, like userId from the JWT
        const userId = req.user.id;

        // Fetch the user's rank from the database
        const user = await User.findByPk(userId);

        if (user && user.rank == 1) {
            console.log(user);
            console.log(user.rank);
            // If the user is found and has a rank of 1, proceed to the next middleware
            next();
        } else {
            // If the user is not found or does not have a rank of 1, return a forbidden response
            res.status(403).json({ message: 'Access forbidden. Insufficient privileges.' });
        }
    } catch (err) {
        next(err);
    }
}


// Middleware function to check user id matches /user/id
async function checkUserId(req, res, next) {
    try {
        // Assuming you have some way to identify the authenticated user, like userId from the JWT
        const userId = req.user.id;
        const userParamId = req.params.id

        // Fetch the user's id from the database
        const user = await User.findByPk(userId);

        if (user && user.id == userParamId) {
            console.log(user);
            console.log(user.id);
            console.log(userParamId)
            // If the user is found and has a rank of 1, proceed to the next middleware
            next();
        } else {
            // If the user is not found or does not have a rank of 1, return a forbidden response
            res.status(403).json({ message: "Access forbidden. You are trying to access another user's id." });
        }
    } catch (err) {
        next(err);
    }
}

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
    getUsers: [checkUserRank, getUsers],
    getUserById,
    updateUser,
    deleteUser
}