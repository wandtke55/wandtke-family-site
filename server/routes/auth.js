// this is the file for all things authentication

const express = require('express');
const authController = require('../controller/authController');

// using express router to route these to the auth controller file
const AuthRouter = express.Router();

// logs in a user
AuthRouter.post('/login', authController.login);
// register a new user
AuthRouter.post('/register', authController.register);
// logs out a user
AuthRouter.get('/logout', authController.logout);

module.exports = AuthRouter;
