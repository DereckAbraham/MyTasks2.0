import { usuariosRegister } from './data.js';

console.log('Archivo main.js cargado');

function validarUsuario(nombreUser, password) {
    let usuarioValido = null;

    usuariosRegister.forEach(user => {
        if ((user.nombreUser === nombreUser || user.correoUser === nombreUser) && user.passUser === password) {
            usuarioValido = user;
        }
    });

    return usuarioValido;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado');

    let btnIniciar = document.querySelector('#loginForm button[type="submit"]');
    let inputUsuario = document.getElementById('usuario');
    let inputPassword = document.getElementById('password');
    let togglePasswordButton = document.getElementById('toggle-password');

    if (togglePasswordButton) {
        togglePasswordButton.addEventListener('click', () => {
            let type = inputPassword.type === 'password' ? 'text' : 'password';
            inputPassword.type = type;
            togglePasswordButton.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
        });
    }

    if (btnIniciar) {
        btnIniciar.addEventListener('click', (event) => {
            let usuario = inputUsuario.value.trim();
            let password = inputPassword.value.trim();

            let usuarioValido = validarUsuario(usuario, password);

            console.log('Usuario:', usuario);
            console.log('Contraseña:', password);
            console.log('Usuario válido:', usuarioValido);

            if (usuarioValido) {
                console.log('Usuario válido, redirigiendo a paginaPrincipal.html');
                
                localStorage.setItem('nombreUsuario', usuarioValido.nombreUser);
                localStorage.setItem('tipoUsuario', 'registrado'); // O cualquier valor que defina si es usuario registrado o beta

                // Utiliza `setTimeout` para dar tiempo a que el navegador complete el almacenamiento
                setTimeout(() => {
                    window.location.href = './paginaPrincipal.html';
                }, 0);
            } else {
                alert('Usuario o contraseña incorrectos');
            }
        });
    }
});
