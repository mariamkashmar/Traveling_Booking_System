const { check } = require('express-validator');
//country
const insertUserValidation = [
  check('firstname')
    .notEmpty()
    .withMessage('First name is required'),

  check('lastname')
    .notEmpty()
    .withMessage('Last name is required'),

  check('password')
    .isLength({ min: 6 })
    .withMessage('Your password is too short')
    .isStrongPassword()
    .withMessage('Use a combination of lowercase, uppercase, numbers, and special characters for your password'),

  check('email')
    .isEmail()
    .withMessage('Wrong email format'),
  
  check('phonenumber')
    .matches(/^\+?[1-9]\d{1,14}$/)
    .withMessage('Invalid phone number format. Use the international format, e.g., +1234567890'),
];
module.exports = { insertUserValidation}

