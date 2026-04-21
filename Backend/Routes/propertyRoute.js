const express = require('express');
const { insertPropertyValidation } = require('../Validators/propertyValidation');
const { insertpropertyController, getpropertyByIdController, getpropertyController  } = require('../Controllers/propertyController');
const router = express.Router();


router.post('/property',insertPropertyValidation, insertpropertyController);
router.get('/getPropertyById/:id',getpropertyByIdController);
router.get('/admin/getAllUsers',getpropertyController);


module.exports = router;