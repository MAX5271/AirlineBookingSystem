const express = require('express');


const UserController = require('../../controllers/userController');
const { AuthRequestValidatorMiddlewares } = require('../../middlewares');
const router = express.Router();


router.post('/signup',AuthRequestValidatorMiddlewares.validateUserAuth,UserController.create);
router.delete('/delete/:id',UserController.destroy);
router.post('/signin',AuthRequestValidatorMiddlewares.validateUserAuth,UserController.signIn);
router.get(
    '/isauthenticated',
    UserController.isAuthenticated
);
router.get('/isadmin',AuthRequestValidatorMiddlewares.validateIsAdmin,UserController.isAdmin);

module.exports=router;