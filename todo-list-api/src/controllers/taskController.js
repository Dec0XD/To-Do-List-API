class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async getTaskById(req, res) {
        try {
            const taskId = req.params.id;
            const task = await this.taskService.getTaskById(taskId);
            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(task);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createTask(req, res) {
        try {
            const taskData = req.body;
            const newTask = await this.taskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.taskService.getTasks(req.query);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTask(req, res) {
        try {
            const taskId = req.params.id;
            const updatedData = req.body;
            const updatedTask = await this.taskService.updateTask(taskId, updatedData);
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteTask(req, res) {
        try {
            const taskId = req.params.id;
            const deletedTask = await this.taskService.deleteTask(taskId);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TaskController;