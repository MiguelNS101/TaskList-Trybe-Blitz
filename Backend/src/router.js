const express = require('express');
const TaskController = require('./controllers/task.controller');
const StatusController = require('./controllers/task.controller');
const validationTask = require('./middlewares/task.middleware');

const router = express.Router();

router.get('/getTasks', TaskController.getAll);
router.get('/getStatus', StatusController.getAll);
router.post(
  '/createTask',
  validationTask.validateName,
  validationTask.validateMessage,
  validationTask.validateNameLenght,
  validationTask.validateMessageLenght,
  TaskController.createTask,
);

router.put(
  '/updateTask/:id',
  validationTask.validateName,
  validationTask.validateMessage,
  validationTask.validateNameLenght,
  validationTask.validateMessageLenght,
  TaskController.editTask,
);

router.put('/updateStatus/:id', TaskController.editStatus);
router.delete('/deleteTask/:id', TaskController.deleteTask);

module.exports = router;
