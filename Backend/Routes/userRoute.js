const express = require ('express');
const router =express.Router();

//express gives up to ability to do routing
router.post('/signup', insertUserValidation, insertUserController);

module.exports=router; //all routers are exported then
