const express = require('express');
const TaskController = require('./controllers/task.controller');
const StatusController = require('./controllers/task.controller');
const validationTask = require('./middlewares/task.middlewares');

const router = express.Router();

router.get('/getTasks', TaskController.getAll);
router.get('/getStatus', StatusController.getAll);
router.post('/createTask', validationTask, TaskController.create);
router.put('/updateTask/:id', validationTask, TaskController.update);
router.put('/updateStatus/:id', TaskController.updateStatus);
router.delete('/deleteTask/:id', TaskController.remove);

module.exports = router;
