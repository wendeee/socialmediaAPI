const { body } = require('express-validator');

exports.updateUserProfile = [
    body('username')
        .isString()
        .withMessage('Username must be a string')
]
