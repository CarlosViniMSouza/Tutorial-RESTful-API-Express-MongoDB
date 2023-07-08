const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// @description: Register a User
// @route: POST /api/user/register
// @access: public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("Please enter all required information");
    }

    const userAvailable = await User.findOne({ email });

    if(userAvailable) {
        res.status(400);
        throw new Error("User already registered!");
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 4);

    // Insert User on table
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    if(user) {
        res.status(201).send({ _id: user._id, email: user.email });
    } else {
        res.status(400)
        throw new Error("Data not valids!")
    }

    console.log(`User created: ${user}`);

    res.send({ message: "Regiter the user!" });
});

// @description: Login User
// @route: POST /api/user/login
// @access: public
const loginUser = asyncHandler(async (req, res) => {
    res.send({ message: "Login user!" });
});

// @description: Current User
// @route: POST /api/user/current
// @access: public
const currentUser = asyncHandler(async (req, res) => {
    res.send({ message: "Current user moment!" });
});

module.exports = { registerUser, loginUser, currentUser };
