const express = require('express');
const authController = require('../controllers/auth_controller');
const authMiddleware = require('../middlewares/users');
const router = express.Router();


// Define routes and their corresponding handlers
router.get('/', authController.signinForm); // Home page, accessible only to authenticated users
router.get('/home', authMiddleware.isLoggedIn, authController.home); // Home page, accessible only to authenticated users
router.get('/signin', authController.signinForm); // Signin page
router.get('/signup', authController.signupForm); // Signup page
router.post('/signin', authController.signin); // Signin page
router.post('/signup', authMiddleware.validateSignup, authController.signup); // Signup page
router.get('/logout', authController.logout); // Signup page


// Export the router module
module.exports = router;
