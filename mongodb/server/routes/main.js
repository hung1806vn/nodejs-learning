const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user');
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../controllers/product');
const { createOrder, getAllOrders } = require('../controllers/order');

const router = express.Router();

// USER APIS
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:userId', getUserById);
router.put('/user/:userId', updateUserById);
router.delete('/user/:userId', deleteUserById);

// PRODUCT APIS
router.post('/product', createProduct);
router.get('/product', getAllProducts);
router.get('/product/:productId', getProductById);
router.put('/product/:productId', updateProductById);
router.delete('/product/:productId', deleteProductById);

// ORDER APIS
router.post('/order', createOrder);
router.get('/order', getAllOrders);

// POSTS APIS
//...
module.exports = router;