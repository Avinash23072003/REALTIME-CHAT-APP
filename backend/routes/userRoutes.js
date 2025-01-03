const express = require('express');
const router = express.Router();
const { userRegister ,loginUser} = require('../controllers/userController.js');

router.route('/').post(userRegister);
 router.post('/login',loginUser);

console.log('userRoutes connection here')
module.exports=router;

