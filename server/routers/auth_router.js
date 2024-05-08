const express = require('express');
const authController = require('../controllers/auth_controller');
const router = express.Router();


// Define routes and their corresponding handlers
router.get('/', authController.home); // Home page, accessible only to authenticated users
router.get('/signin', authController.signin); // Signin page
router.get('/signup', authController.signup); // Signup page

// Export the router module
module.exports = router;
