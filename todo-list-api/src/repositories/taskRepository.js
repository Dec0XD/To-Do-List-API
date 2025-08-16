class TaskRepository {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }

    async createTask(taskData) {
        return await this.TaskModel.create(taskData);
    }

    async getTasks(filter = {}) {
        return await this.TaskModel.findAll({ where: filter });
    }

    async getTaskById(taskId) {
        return await this.TaskModel.findByPk(taskId);
    }

    async updateTask(taskId, updateData) {
        const task = await this.TaskModel.findByPk(taskId);
        if (!task) {
            return null;
        }
        return await task.update(updateData);
    }

    async deleteTask(taskId) {
        const task = await this.TaskModel.findByPk(taskId);
        if (!task) {
            return null;
        }
        await task.destroy();
        return task;
    }
}

module.exports = TaskRepository;