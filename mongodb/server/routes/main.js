const express = require('express');
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/user');

const router = express.Router();

// USER APIS
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:userId', getUserById);
router.put('/user/:userId', updateUserById);
router.delete('/user/:userId', deleteUserById);

// POSTS APIS
//...
module.exports = router;