'use strict';

const express = require('express');
const { authCtrl } = require('../../controllers');

const router = express.Router();

router.post('/token', authCtrl.signToken);
// gg.com/api/v1/auth/login
// gg.com/api/v1/auth/register
// gg.com/api/v1/auth/recuperar_contraseña

module.exports = router;
