const express = require('express');
const router = express.Router();

// Import all controllers
const authController = require('../services/auth/auth');
const userController = require('../controllers/userController');
/*
const cartController = require('../controllers/cartController');
const addressController = require('../controllers/addressController');
const paymentController = require('../controllers/paymentController');
const reviewController = require('../controllers/reviewController');
const wishlistController = require('../controllers/wishlistController');
*/

// User routes
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.get('/users', userController.getAllUsers);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
/*
// Cart routes
router.post('/carts', cartController.createCart);
router.get('/carts/:id', cartController.getCart);

// Address routes
router.post('/addresses', addressController.createAddress);
router.get('/addresses/:id', addressController.getAddress);

// Payment routes
router.post('/payments', paymentController.createPayment);
router.get('/payments/:id', paymentController.getPayment);

// Review routes
router.post('/reviews', reviewController.createReview);
router.get('/reviews/:id', reviewController.getReview);

// Wishlist routes
router.post('/wishlists', wishlistController.createWishlist);
router.get('/wishlists/:id', wishlistController.getWishlist);

*/

// Register
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Forget Password
router.post('/forget-password', authController.forgetPassword);
module.exports = router;