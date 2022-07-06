const path = require('path');

const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

// /api/sso/auth/login => POST
router.post('/login', authController.login);

// /api/sso/auth/login => POST
router.post('/re-login-self-care', authController.login);

// /admin/add-product => GET
// router.get('/add-product', authController.getAddProduct);

// /admin/products => GET
// router.get('/products', authController.getProducts);

// /admin/add-product => POST
// router.post('/add-product', authController.postAddProduct);

module.exports = router;
