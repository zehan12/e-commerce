const { status, errorMessage } = require("../helpers/status");
const User = require("../model/User");
const { empty, validatePassword, isValidEmail } = require("../utils/validaion");

// @route     POST api/v1.0/register
// @desc      Regiter a user
// @access    Public
handleCreateUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (password) return res.json(typeof(password))
    if (empty(email) || empty(firstName) || empty(lastName) || empty(password)) {
        errorMessage.error = 'Firstname, lastname, email and password field cannot be empty';
        return res.status(status.bad).json(errorMessage);
    }
    if (!isValidEmail(email)) {
        errorMessage.error = 'Please enter a valid Email';
        return res.status(status.bad).json(errorMessage);
    }
    if (!validatePassword(password)) {
        errorMessage.error = 'Password must be more than five(8) characters';
        return res.status(status.bad).json(errorMessage);
    }
}

module.exports = {
    handleCreateUser
}