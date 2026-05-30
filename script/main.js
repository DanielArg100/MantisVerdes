import { ListaProductos } from "./db.js";

function MostrarProductos(lista) {
    let contenedor = document.querySelector(".contenedor")
    contenedor.innerHTML = ""
    lista.forEach(i => {
        let nuevoDiv = document.createElement("div")
        nuevoDiv.classList.add("Tarjeta")
        nuevoDiv.innerHTML = `
        <div>
            <h1>${i.nombre}</h1>
            <img src="${i.img}">
        </div>
        <div>
            <p>${i.precio}</p>
            ${i.Stock < 3 ? '<span style=color:red>Stock Bajo</span>' : ""}
            <button>Agregar Al Carrito</button>
            <button>♥️</button>
        </div>
        `
        contenedor.appendChild(nuevoDiv)
    });
}
/*
MostrarProductos(ListaProductos)

let texto = document.querySelector(".texto")
let contenedor = document.querySelector(".contenedor")

texto.addEventListener("keyup", function () {
    let filtrar = ListaProductos.filter(i=>i.nombre.toLowerCase().includes(texto.value.toLowerCase().trim()))
    if (filtrar.length>0) {
        MostrarProductos(filtrar)
    } else {
        contenedor.innerHTML=`<p style="color: red;">No Se Encontraron Coincidencias...</p>`
    }
})
*/

let BMO = document.querySelector(".mOscuro")
let body = document.getElementById("cuerpo")
let cuerpo = document.getElementById("cuerpoMain")
let encabezado = document.getElementById("encabezado")
let pieDePágina = document.getElementById("Pie")
let estado = "Oscuro"


BMO.innerHTML = `
    <button onclick="CambiarModo()" type="button" class="Links">Cambiar a Modo ${estado}</button>
`
window.CambiarModo = function () {
    if (body.classList == "") {
        let estado = "Claro"
        BMO.innerHTML = `
    <button onclick="CambiarModo()" type="button" class="Links">Cambiar a Modo ${estado}</button>
`
    } else {
        let estado = "Oscuro"
        BMO.innerHTML = `
    <button onclick="CambiarModo()" type="button" class="Links">Cambiar a Modo ${estado}</button>
`
    }
    body.classList.toggle("modoOscuro");
    encabezado.classList.toggle("encabezadoO")
    cuerpo.classList.toggle("CuerpoO")
    pieDePágina.classList.toggle("PioO")
}

