class TaskRepository {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }

    async createTask(taskData) {
        const task = new this.TaskModel(taskData);
        return await task.save();
    }

    async getTasks(filter = {}) {
        return await this.TaskModel.find(filter);
    }

    async getTaskById(taskId) {
        return await this.TaskModel.findById(taskId);
    }

    async updateTask(taskId, updateData) {
        return await this.TaskModel.findByIdAndUpdate(taskId, updateData, { new: true });
    }

    async deleteTask(taskId) {
        return await this.TaskModel.findByIdAndDelete(taskId);
    }
}

module.exports = TaskRepository;