const db = require('../models');

// Get Models
const User = db.users
const Donation = db.donations
const Visit = db.shedulevisits

// Middleware function to check user rank
async function checkUserRank(req, res, next) {
    try {
        // Assuming you have some way to identify the authenticated user, like userId from the JWT
        const userId = req.user.id;

        // Fetch the user's rank from the database
        const user = await User.findByPk(userId);

        // Confirm if user is logged in
        if(user.tokenexpire == 0) {
            res.status(403).json({ message: "Login to access your account."});
            next();
        }

        if (user && user.rank == 1) {
            // console.log(user);
            // console.log(user.rank);
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

        // Confirm if user is logged in
        if(user.tokenexpire == 0) {
            res.status(403).json({ message: "Login to access your account."});
            next();
        }

        if (user && user.id == userParamId || user.rank == 1) {
            // console.log(user);
            // console.log(user.id);
            // console.log(userParamId)
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

async function logoutUser(req, res, next) {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json({"message": "User logged out Successfully", "data": user});
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

async function addDonation(req, res, next) {
    let userInfo = req.body;
    userInfo.user_id = req.user.id;
    userInfo.firstname = req.user.firstname;
    userInfo.lastname = req.user.lastname;
    userInfo.email = req.user.email;
    try {
        const donation = await Donation.create(userInfo);
        res.status(201).json({"message": "Successful", "data":donation});
    } catch (error) {
        next(error);
    }

}

async function getDonations(req, res, next) {
    try {
        console.log(req.body)
        const donation = await Donation.findAll()
        res.json({"message": "Successful", "data":donation})
    } catch (err) {
        next(err)
    }
}

async function getUserByIdDonation(req, res, next) {
    try {
        const donation = await Donation.findAll({
            where: {
              user_id: req.params.id
            }
          });
        res.json({"message": "Successful", "data":donation})
    } catch (err) {
        next(err)
    }
}

async function addVisit(req, res, next) {
    let visitInfo = req.body;
    visitInfo.user_id = req.user.id;
    visitInfo.firstname = req.user.firstname;
    visitInfo.lastname = req.user.lastname;
    visitInfo.email = req.user.email;
    try {
        const visit = await Visit.create(visitInfo);
        res.status(201).json({"message": "Successful", "data":visit});
    } catch (error) {
        next(error);
    }

}

async function getVisit(req, res, next) {
    try {
        const visit = await Visit.findAll({
            where: {
              user_id: req.params.id
            }
          });
        res.json({"message": "Successful", "data":visit})
    } catch (err) {
        next(err)
    }
}




module.exports = {
    checkUserRank,
    addUser,
    getUsers: [checkUserRank, getUsers],
    getUserById: [checkUserId, getUserById],
    updateUser: [checkUserId, updateUser],
    deleteUser: [checkUserId, deleteUser],
    logoutUser: [checkUserId, logoutUser],
    getDonations: [checkUserRank, getDonations],
    addDonation: [checkUserId, addDonation],
    getUserByIdDonation: [checkUserId, getUserByIdDonation],
    addVisit: [checkUserId, addVisit],
    getVisit: [checkUserId, getVisit]
}