const {check} = require ('express-validator'); //library to not write things from scratch
const insertUserController =[
    check('username').
    notEmpty().
    withMessage("Username cannot be empty").
    isAlphanumeric().
    withMessage("User should be alphanumeric"),
    
    check('password')
    .notEmpty()
    .withMessage("Password cannot be empty").
    isStrongPassword().
    withMessage("Password should be strong"),

    check('firstname')
    .notEmpty().withMessage("First name cannot be empty"),

    check('Last Name')
    .notEmpty.withMessage("First name cannot be empty"),

    check('email')
    .notEmpty

]