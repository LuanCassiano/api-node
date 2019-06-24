const express = require('express');
const router = express.Router();

const UserController = require('./app/controllers/UserController');
const ProjectController = require('./app/controllers/ProjectController');

router.get('/users', UserController.index);
router.get('/user/:id', UserController.show);
router.post('/user', UserController.store);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.destroy);

router.get('/projects', ProjectController.index);
router.get('/project/:id', ProjectController.show);
router.post('/project', ProjectController.store);
router.put('/project/:id', ProjectController.update);
router.delete('/project/:id', ProjectController.destroy);

module.exports = router;