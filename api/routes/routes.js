const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
router.get('/', controller.getAllUsers);
router.get('/:userId', controller.getUserById);
router.post('/add', controller.addUser);

module.exports = router;
