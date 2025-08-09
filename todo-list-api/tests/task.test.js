const request = require('supertest');
const app = require('../src/app');
const Task = require('../src/models/task');

describe('Task API', () => {
    beforeEach(async () => {
        await Task.deleteMany({});
    });

    it('should create a new task', async () => {
        const response = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Test Task',
                description: 'This is a test task',
                status: 'pending',
                priority: 'high',
                dueDate: '2023-12-31'
            });

        expect(response.status).toBe(201);
        expect(response.body.title).toBe('Test Task');
    });

    it('should get all tasks', async () => {
        await Task.create({
            title: 'Test Task 1',
            description: 'This is test task 1',
            status: 'pending',
            priority: 'medium',
            dueDate: '2023-12-31'
        });

        const response = await request(app).get('/api/tasks');

        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
    });

    it('should update a task', async () => {
        const task = await Task.create({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pending',
            priority: 'high',
            dueDate: '2023-12-31'
        });

        const response = await request(app)
            .put(`/api/tasks/${task._id}`)
            .send({
                title: 'Updated Task',
                description: 'This is an updated test task',
                status: 'completed',
                priority: 'low',
                dueDate: '2024-01-01'
            });

        expect(response.status).toBe(200);
        expect(response.body.title).toBe('Updated Task');
    });

    it('should delete a task', async () => {
        const task = await Task.create({
            title: 'Test Task',
            description: 'This is a test task',
            status: 'pending',
            priority: 'high',
            dueDate: '2023-12-31'
        });

        const response = await request(app).delete(`/api/tasks/${task._id}`);

        expect(response.status).toBe(204);
    });
});