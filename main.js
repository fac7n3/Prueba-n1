//alert("faculo y bianigga");

//existen 3 tipos de variables: const, var y let
//var es una variable global, let es una variable local, const es una variable constante, no se puede modificar su valor
//var nombre = "faculo y bianigga";
//let apellido = "y bianigga";
// ; no es obligatorio, pero es una buena práctica para separar las instrucciones

const dni = "12.345.678";
let edad =18;

//dni = "anashe"; //esto no se puede hacer porque dni es una constante

console.log(edad); //esto muestra el valor de la variable edad en la consola del navegador

prompt("ingrese el nombre de usuario"); //esto muestra un cuadro de diálogo para ingresar un valor, el valor ingresado se guarda en una variable

const nombreUsuario = prompt("ingrese el nombre de usuario"); //esto muestra un cuadro de diálogo para ingresar un valor, el valor ingresado se guarda en la variable nombreUsuario 
alert("Hola," + " " + nombreUsuario); //esto muestra un cuadro de diálogo con el valor de la variable nombreUsuario pero los concatena pq son 2 strings, el resultado es "Hola, faculo y bianigga" si el usuario ingresa "faculo y bianigga" como nombre de usuario

