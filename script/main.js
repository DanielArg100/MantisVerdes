import { ListaProductos } from "./db.js";



function MostrarProductos(lista) {
    let contenedor = document.querySelector(".contenedor")
    if (contenedor) {
        contenedor.innerHTML = ""
        lista.forEach(i => {
            let nuevoDiv = document.createElement("div")
            nuevoDiv.classList.add("Tarjeta")

            nuevoDiv.innerHTML = `

            <img src="${i.img}">

            <h1>${i.nombre}</h1>

            <p>$${i.precio}</p>

            ${i.stock < 3 ? '<span style="color: red;">Stock Bajo</span>' : '<span style="color:#124527;">Stock Alto</span>'}

            <div class="Tarjeta-footer">
                <button type="button" class="Agregar-Carro" onclick="MostrarCarro()">Agregar Al Carro</button>
                <button class="CoranzonDeLosHuevos" onclick="MostrarCorazon()">♥️</button>
            </div>
        `
            contenedor.appendChild(nuevoDiv)
        });
    }
}

MostrarProductos(ListaProductos)

let texto = document.querySelector(".texto")
let contenedor = document.querySelector(".contenedor")

if (texto) {
    texto.addEventListener("keyup", function () {
        let filtrar = ListaProductos.filter(i => i.nombre.toLowerCase().includes(texto.value.toLowerCase().trim()))
        if (filtrar.length > 0) {
            MostrarProductos(filtrar)
        } else {
            contenedor.innerHTML = `<p style="color: red;">No Se Encontraron Coincidencias...</p>`
        }
    })
}

const BMO = document.querySelector(".mOscuro")
const body = document.getElementById("cuerpo")
const cuerpo = document.getElementById("cuerpoMain")
const encabezado = document.getElementById("encabezado")
const pieDePágina = document.getElementById("Pie")
const fooha = document.getElementById("fooha")
const foohatext = document.getElementById("foohatext")

const sistemaFiltradoO = document.getElementById("sistemaFiltradoO")

const TarjetaO = document.querySelector(".contenedor")

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
    encabezado.classList.toggle("encabezadoO");
    pieDePágina.classList.toggle("PioO");
    if (cuerpo) {
        cuerpo.classList.toggle("CuerpoO");
    }
    if (fooha) {
        fooha.classList.toggle("foohaO");
    }
    if (foohatext) {
        foohatext.classList.toggle("foohatextO")
    }
    if (sistemaFiltradoO) {
        sistemaFiltradoO.classList.toggle("sistemaFiltradoO")
    }
    if (TarjetaO) {
        for (let i = 0; i < TarjetaO.childElementCount; i++) {
            TarjetaO.children[i].classList.toggle("TarjetaO")
            console.log(TarjetaO.children[i])
            console.log(TarjetaO.children[i].classList)
        }
    }
}

let X = document.getElementById("X")
let R = document.getElementById("R")
let F = document.getElementById("F")
let E = document.getElementById("E")

X.addEventListener("click", function () {
    MostrarProductos(ListaProductos)
})
R.addEventListener("click", function () {
    let filtrar = ListaProductos.filter(i => i.id.includes("ropa"))
    MostrarProductos(filtrar)
})
F.addEventListener("click", function () {
    let filtrar = ListaProductos.filter(i => i.id.includes("fk"))
    MostrarProductos(filtrar)
})
E.addEventListener("click", function () {
    let filtrar = ListaProductos.filter(i => i.id.includes("extra"))
    MostrarProductos(filtrar)
})


window.MostrarCarro = function () {
    let timerInterval;
    Swal.fire({
        title: "Añadido Al Carrito",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) console.log("I was closed by the timer");
    });
}

window.MostrarCorazon = function () {
    Swal.fire({
        title: "💖",
        text: "Añadido A Favoritos",
        imageUrl: "../src/srcExtra/Gatos/elgatitoloves-elgatitolover.gif",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
}