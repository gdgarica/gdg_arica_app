'use strict';

const express = require('express');
const { authCtrl } = require('../../controllers');

const router = express.Router();

router.post('/login', authCtrl.loginUser);
router.post('/register', authCtrl.registerUser);
// gg.com/api/v1/auth/login
// gg.com/api/v1/auth/register
// gg.com/api/v1/auth/recuperar_contraseña

module.exports = router;
