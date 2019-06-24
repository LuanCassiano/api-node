const express = require('express');
const router = express.Router();

const UserController = require('./app/controllers/UserController');

router.get('/users', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

module.exports = router;