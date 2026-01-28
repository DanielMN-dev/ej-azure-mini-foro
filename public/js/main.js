async function fetchTasks() {
    try {
        const response = await fetch('/api/tasks');
        const data = await response.json();

        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';

        if (!Array.isArray(data)) {
            taskList.innerHTML = `<p>${data.error}</p>`;
            return;
        }

        if (data.length === 0) {
            taskList.innerHTML = '<p>No hay tareas</p>';
            return;
        }

        data.forEach(task => {
            const div = document.createElement('div');
            div.className = 'task';
            div.innerHTML = `
                <h3>${task.titulo}</h3>
                <p>${task.descripcion || ''}</p>
            `;
            taskList.appendChild(div);
        });
    } catch (err) {
        console.error(err);
    }
}


async function createTask(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;

    try {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ titulo, descripcion })
        });

        document.getElementById('taskForm').reset();
        fetchTasks();
    } catch (err) {
        console.error(err);
    }
}

window.addEventListener('load', () => {
    fetchTasks();
    document
        .getElementById('taskForm')
        .addEventListener('submit', createTask);
});

