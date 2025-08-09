class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async getTaskById(taskId) {
        return await this.taskRepository.getTaskById(taskId);
    }

    async createTask(taskData) {
        // Validate task data here (e.g., check required fields)
    return await this.taskRepository.createTask(taskData);
    }

    async getTasks(filter) {
        // Implement filtering logic based on priority and due date
    return await this.taskRepository.getTasks(filter);
    }

    async updateTask(taskId, updatedData) {
        // Validate updated data here
    return await this.taskRepository.updateTask(taskId, updatedData);
    }

    async deleteTask(taskId) {
    return await this.taskRepository.deleteTask(taskId);
    }
}

module.exports = TaskService;