
//hacer un ingreso a un bnaco : piediendo dni, nombre, apellido,email,edad (si la edad es menor a 18, no se puede hacer el ingreso) y mostrar un mensaje de bienvenida con el nombre del usuario y su edad
//hacer un ingreso a un bnaco : piediendo dni, nombre, apellido,email,edad (si la edad es menor a 18, no se puede hacer el ingreso) y mostrar un mensaje de bienvenida con el nombre del usuario y su edad

const edadUsuario = Number(prompt("Ingrese su edad:"));


if (edadUsuario >= 18 && edadUsuario <= 100)
{
    const nombreUsuario = prompt("Ingrese su nombre:");
    
    if (nombreUsuario.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres. Por favor, ingrese un nombre válido.");
    } else {
        const apellidoUsuario = prompt("Ingrese su apellido:");
        const emailUsuario = prompt("Ingrese su email:");
        const dniUsuario = prompt("Ingrese su DNI:");

        if (dniUsuario.length !== 10) {
            alert("El DNI debe tener 10 caracteres. Por favor, ingrese un DNI válido.");
        } else {
            alert("Bienvenido al banco, " + nombreUsuario + "! Tu edad es: " + edadUsuario);
        }
    }

}

 else {
        alert("Lo siento, no puedes hacer el ingreso al banco porque eres menor de edad.");

 }