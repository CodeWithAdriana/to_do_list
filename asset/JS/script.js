const listadoTareas = [
    { id: 1, descripcion: 'Comenzar modulo 2 Mic talent', completado: false },
    { id: 2, descripcion: 'Post en Instagram', completado: true },
    { id: 3, descripcion: 'Sacar a pasear a michichi', completado: false },
];

const tareaInput = document.querySelector("#nuevatarea");
const btnAgregar = document.querySelector("#add-btn");
const totalTareasSpan = document.querySelector("#total-tareas");
const tareasListasSpan = document.querySelector("#tareas-listas");
const seccionListado = document.querySelector("#lista-de-tareas");

function renderTareas() {
    seccionListado.innerHTML = "";
    listadoTareas.forEach(tarea => {
        const tareaElemento = document.createElement("div");
        tareaElemento.classList.add("tarea-item");
        tareaElemento.innerHTML = `
            <div><span class="tarea-id">ID: ${tarea.id}</span></div>
            <div><span class="tarea-texto">Tarea: ${tarea.descripcion}</span></div>
            <div>
                <input type="checkbox" class="tarea-checkbox" ${tarea.completado ? 'checked' : ''} onchange="marcarCompletado(${tarea.id})">
                <button class="btn-eliminar" onclick="eliminarTarea(${tarea.id})">Eliminar</button>
            </div>
        `;
        seccionListado.appendChild(tareaElemento);
    });
    totalTareasSpan.textContent = listadoTareas.length;
    tareasListasSpan.textContent = listadoTareas.filter(t => t.completado).length;
}


function agregarTarea() {
    const descripcion = tareaInput.value.trim();
    if (descripcion) {
        const nuevaTarea = {
            id: listadoTareas.length > 0 ? listadoTareas[listadoTareas.length - 1].id + 1 : 1,
            descripcion,
            completado: false
        };
        listadoTareas.push(nuevaTarea);
        tareaInput.value = "";
        renderTareas();
    }
}

function eliminarTarea(id) {
    const index = listadoTareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        listadoTareas.splice(index, 1);
        renderTareas();
    }
}

function marcarCompletado(id) {
    const tarea = listadoTareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completado = !tarea.completado;
        renderTareas();
    }
}

btnAgregar.addEventListener("click", agregarTarea);

document.addEventListener('DOMContentLoaded', renderTareas);


