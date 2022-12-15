const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
router.get('/', controller.getAllUsers);
router.get('/add', controller.addUser);

module.exports = router;
