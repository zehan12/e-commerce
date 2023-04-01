const { errorMessage, status, successMessage } = require("../helpers/status");
const User = require("../model/User");
const { empty, validatePassword, isValidEmail } = require("../utils/validaion");

handleLogin = async (req, res) => {
    let { username, email, password } = req.body;
    if (typeof password === "number") {
        password = String(password);
    }
    if (empty(email) || empty(password) || empty(username)) {
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
        const user = await User.findOne({ email });
        if (!user) {
            errorMessage.error = "User with this email does not exist"
            return res.status(status.notfound).json(errorMessage)
        }
        if (username !== user.username) {
            errorMessage.error = "Enter username is wrong!!"
            return res.status(status.notfound).json(errorMessage)
        }
        const result = await user.verifyPassword(password);
        if (!result) {
            errorMessage.error = 'The password you provided is incorrect';
            return res.status(status.bad).json(errorMessage);
        }
        // let token = await user.signToken();
        successMessage.message = "user login"
        successMessage.user = user
        return res.status(status.success).json(successMessage);
    } catch (error) {
        console.log(error)
        errorMessage.error = `Operation was not successful due to ${error.message}`;
        return res.status(status.error).json(errorMessage);
    }
}

module.exports = {
    handleLogin
}