// Obtener los elementos
let modal = document.getElementById("miModal");
let abrirModal = document.querySelector(".opciones .material-symbols-outlined:nth-child(2)"); // El ícono de "add_circle"
let cerrarModal = document.querySelector(".modal .cerrar");
let formulario = document.getElementById("formularioTarea");
let tareaList = document.querySelector(".task-list");
let nombreUsuarioElement = document.getElementById('nombreUsuario');


abrirModal.onclick = function() {
    modal.style.display = "block";
}

cerrarModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let botonEnviar = formulario.querySelector('button[type="submit"]');

botonEnviar.addEventListener('click', function() {
    let nombreTarea = document.getElementById("nombreTarea").value;
    let asignado = document.getElementById("asignado").value;
    let fechaEntrega = document.getElementById("fechaEntrega").value;
    let estado = document.getElementById("estado").value;

    let nuevaFila = document.createElement("div");
    nuevaFila.classList.add("task-row");

    nuevaFila.innerHTML = `
        <div class="task-name">
            <span class="material-symbols-outlined">check_circle</span>
            <span>${nombreTarea}</span>
        </div>
        <div class="assigned">
            <p class="nombre">${asignado}</p>
        </div>
        <div class="due-date">${fechaEntrega}</div>
        <div class="status">${estado}</div>
    `;

    tareaList.appendChild(nuevaFila);

    modal.style.display = "none";

    formulario.reset();
});

//Lo que valida usuario beta o con cuenta
document.addEventListener('DOMContentLoaded', () => {
    let nombreUsuario = localStorage.getItem('nombreUsuario');

    if (nombreUsuario) {
        nombreUsuarioElement.textContent = `Hola, ${nombreUsuario}`;
    } else {
        nombreUsuarioElement.textContent = 'Invitado';
    }
});
