let agregarcarrito=document.getElementById("AgregarCarrito")
let NumeroCarrito=document.getElementById("numeroCarrito")
let contador = 0;





agregarcarrito.addEventListener("click",()=> {
    contador = contador + 1
NumeroCarrito.textContent = contador
console.log(contador)
})