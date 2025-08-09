const express = require('express');
const TaskController = require('../controllers/taskController');
const TaskService = require('../services/taskService');
const TaskRepository = require('../repositories/taskRepository');
const Task = require('../models/task');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
const taskRepository = new TaskRepository(Task);
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

// Routes mounted at /api/tasks in app.js
router.post('/', authMiddleware, taskController.createTask.bind(taskController));
router.get('/', authMiddleware, taskController.getTasks.bind(taskController));
router.get('/:id', authMiddleware, taskController.getTaskById.bind(taskController));
router.put('/:id', authMiddleware, taskController.updateTask.bind(taskController));
router.delete('/:id', authMiddleware, taskController.deleteTask.bind(taskController));

module.exports = router;