const express = require('express');
const { insertUserValidation } = require('../Validators/userValidation');
const { insertUserController, signInController, getUserByIdController, getUsersController } = require('../Controllers/userController');
const router = express.Router();


router.post('/signup',insertUserValidation, insertUserController);
router.post('/signin', signInController);
router.get('/getUserById/:id',getUserByIdController);
router.get('/admin/getAllUsers',getUsersController);


module.exports = router;