const asyncHandler = require('express-async-handler');

// @description: Register a User
// @route: POST /api/user/register
// @access: public
const registerUser = asyncHandler(async (req, res) => {
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
