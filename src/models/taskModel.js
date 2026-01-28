const { sql, getPool } = require('../db/azureSql');

async function getAllTasks() {
    const pool = getPool();
    if (!pool) {
        throw new Error('Base de datos no conectada');
    }

    const result = await pool
        .request()
        .query('SELECT * FROM Tasks ORDER BY fecha_creacion DESC');

    return result.recordset;
}

module.exports = {
    getAllTasks,
    createTask
};

async function createTask(titulo, descripcion) {
    const pool = getPool();
    if (!pool) {
        throw new Error('Base de datos no conectada');
    }

    await pool.request()
        .input('titulo', sql.VarChar(255), titulo)
        .input('descripcion', sql.Text, descripcion)
        .query(`
            INSERT INTO Tasks (titulo, descripcion)
            VALUES (@titulo, @descripcion)
        `);
}

