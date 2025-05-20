const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Aquí debes llamar a cada función, no al objeto completo
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/change-password', authController.changePassword);

module.exports = router;
