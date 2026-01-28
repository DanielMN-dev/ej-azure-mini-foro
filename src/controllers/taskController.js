const taskModel = require('../models/taskModel');

async function listTasks(req, res) {
    try {
        const tasks = await taskModel.getAllTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({
            error: 'Error al obtener las tareas',
            detail: err.message
        });
    }
}

module.exports = {
    listTasks,
    createTask
};

async function createTask(req, res) {
    const { titulo, descripcion } = req.body;

    if (!titulo) {
        return res.status(400).json({ error: 'El título es obligatorio' });
    }

    try {
        await taskModel.createTask(titulo, descripcion);
        res.status(201).json({ message: 'Tarea creada correctamente' });
    } catch (err) {
        res.status(500).json({
            error: 'Error al crear la tarea',
            detail: err.message
        });
    }
}

