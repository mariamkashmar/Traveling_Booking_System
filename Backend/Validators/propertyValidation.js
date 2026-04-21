const { check } = require('express-validator');

const insertPropertyValidation = [

  check('propertyname')
    .notEmpty()
    .withMessage('Property name is required')
    .isLength({ min: 3 })
    .withMessage('Property name must be at least 3 characters'),

  check('type')
    .notEmpty()
    .withMessage('Property type is required'),

  check('city')
    .notEmpty()
    .withMessage('City is required'),

  check('country')
    .notEmpty()
    .withMessage('Country is required'),

  check('price')
    .notEmpty()
    .withMessage('Price is required')
    .isNumeric()
    .withMessage('Price must be a number'),

  check('guests')
    .notEmpty()
    .withMessage('Guests number is required')
    .isInt({ min: 1 })
    .withMessage('Guests must be at least 1'),

  check('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters')

];

module.exports = { insertPropertyValidation };