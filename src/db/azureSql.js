const sql = require('mssql');

let pool;

async function connectDB() {
    try {
        pool = await sql.connect({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            server: process.env.DB_SERVER,
            database: process.env.DB_NAME,
            options: {
                encrypt: true,
                trustServerCertificate: false
            }
        });
        console.log('Conectado a Azure SQL');
    } catch (err) {
        console.error('Error conexión Azure SQL:', err.message);
    }
}

function getPool() {
    return pool;
}

module.exports = {
    connectDB,
    getPool,
    sql
};
