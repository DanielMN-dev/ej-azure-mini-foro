const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Archivos estáticos
app.use(express.static('public'));

//Rutas
const taskRoutes = require('./src/routes/taskRoutes');
app.use('/api/tasks', taskRoutes);

const { connectDB } = require('./src/db/azureSql');
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});