const express = require('express');
const usersCtrl = require('../../controllers/users.js')

const router = express.Router();

// Base url might be /api/users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);

module.exports = router;