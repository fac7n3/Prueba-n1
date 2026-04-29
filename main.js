function hacerIngreso() {
    const edadUsuario = Number(document.getElementById("edad").value);
    const mensajeDiv = document.getElementById("mensaje");
    
    if (isNaN(edadUsuario) || edadUsuario < 1) {
        mostrarMensaje("Por favor, ingrese una edad válida.", "error");
        return;
    }

    if (edadUsuario < 18) {
        mostrarMensaje("Lo siento, no puedes hacer el ingreso al banco porque eres menor de edad.", "error");
        return;
    }

    if (edadUsuario > 100) {
        mostrarMensaje("Por favor, ingrese una edad válida (menor a 100).", "error");
        return;
    }

    const nombreUsuario = document.getElementById("nombre").value.trim();
    
    if (nombreUsuario.length < 3) {
        mostrarMensaje("El nombre debe tener al menos 3 caracteres.", "error");
        return;
    }

    const apellidoUsuario = document.getElementById("apellido").value.trim();
    const emailUsuario = document.getElementById("email").value.trim();
    const dniUsuario = document.getElementById("dni").value.trim();

    if (dniUsuario.length !== 10) {
        mostrarMensaje("El DNI debe tener 10 caracteres.", "error");
        return;
    }

    mostrarMensaje("Bienvenido al banco, " + nombreUsuario + "! Tu edad es: " + edadUsuario, "success");
}

function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = texto;
    mensajeDiv.className = tipo;
    mensajeDiv.style.display = "block";
}

