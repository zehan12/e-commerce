const { status, errorMessage, successMessage } = require("../helpers/status");
const User = require("../model/User");
const { empty, validatePassword, isValidEmail } = require("../utils/validaion");

// @route     POST api/v1.0/register
// @desc      Regiter a user
// @access    Public
handleCreateUser = async (req, res) => {
    let { firstName, lastName, username, email, password } = req.body;
    if (typeof password === "number") {
        password = String(password);
    }
    if (empty(email) || empty(firstName) || empty(lastName) || empty(password) || empty(username)) {
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

    try {
        const usernameAlreadyTaken = await User.findOne({ username });
        if (usernameAlreadyTaken) {
            errorMessage.error = `User with this ${username} already exist`;
            return res.status(status.conflict).json(errorMessage)
        }
        const userExit = await User.findOne({ email });
        if (userExit) {
            errorMessage.error = `User with this ${email} already exist`;
            return res.status(status.conflict).json(errorMessage)
        } else {
            const user = await User.create({ firstName, lastName, username, email, password })
            successMessage.message = "user created" 
            successMessage.user = user;
            return res.status(status.success).json(successMessage);
        }
    } catch (error) {
        errorMessage.error = `Operation was not successful due to ${error.message}`;
        return res.status(status.error).json(errorMessage);
    }

}

module.exports = {
    handleCreateUser
}