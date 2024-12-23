console.log("OK");

const zonaServicio = document.getElementById("zona");

console.log(zonaServicio);

function verificarZona() {
    console.log(zonaServicio.value);

    let zona = zonaServicio.value;

    if (zona === "CABA" || zona === "GBA SUR" || zona === "GBA OESTE") {
        console.log("Podemos visitarte");
        MensajeZona.innerText = "Podemos visitarte";
    } else {
        console.log("Por el momento, no podemos visitarte");
        MensajeZona.innerText = "Por el momento, no podemos visitarte";
    }

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const carritoLista = document.getElementById('lista-de-productos');
    const totalElement = document.getElementById('total');
    const vaciarCarritoButton = document.getElementById('vaciar-carrito');
}

const productos = [
    {
        nombre: "Botinero doble",
        descripcion: "Este hermoso botinero te la posibilidad de guardar tu calzado en un mueble a la vista pero con mucho estilo",
        imagen: "imagenes/botinero doble.jpg",
        precio: 55590
    },
    {
        nombre: "Organizadores",
        descripcion: "Tu mejor opción para tener todo en un solo lugar",
        imagen: "imagenes/interior de placard 2.jpg",
        precio: 125700
    },
    {
        nombre: "Cocinas",
        descripcion: "Podemos hacer el modelo que se ajuste a tu presupuesto y espacio",
        imagen: "imagenes/cocina 2.jpg",
        precio: 75699
    },
    {
        nombre: "Recibidor",
        descripcion: "Para darle ese toque cálido a tu hogar",
        imagen: "imagenes/recibidor.jpg",
        precio: 38999
    }
];

const btnHacerClic = document.getElementById("btnHacerClic");
const lblClics = document.getElementById("lblClics");

let contador = 0;
function contarClics() {
    contador++;
    console.log(contador + " clics");
    lblClics.innerText = contador;
}

btnHacerClic.addEventListener("click", contarClics);

console.log(productos[0].precio);

let productosHTML = "";
for (let indice = 0; indice < productos.length; indice++) {
    productosHTML += `
        <div class="botineros">
            <img src="${productos[indice].imagen}" alt="foto de un producto"><br> 
            <span>${productos[indice].nombre}</span>
            <p>Precio promocional: $${productos[indice].precio}</p>
            <p>${productos[indice].descripcion}</p>
            <a href="">Ver más info</a>
            <input type="number">
            <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
        </div>
    `;
}

console.log(productosHTML);

const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = productosHTML;

const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(botonAgregar);

// Seleccionar el div con id "root"
const root = document.getElementById("root");

let totalAPagar = 0;

for (let indice = 0; indice < botonAgregar.length; indice++) {
    function agregarElementoCarrito() {
        console.log("clic " + indice);

        const elementoDiv = document.createElement("div");
        elementoDiv.classList.add("producto-en-carrito");

        // Crear un contenido visual para el producto agregado al carrito
        elementoDiv.innerHTML = `
            <span>${productos[indice].nombre} - $${productos[indice].precio}</span>
            <p>${productos[indice].descripcion}</p>
        `;

        console.log(elementoDiv);
        // Insertar el producto en el div#root
        root.appendChild(elementoDiv);

        totalAPagar += productos[indice].precio;

        // Mostrar el total actualizado
        const totalCarrito = document.createElement("p");
        totalCarrito.innerText = "Total a pagar: $" + totalAPagar;
        root.appendChild(totalCarrito);
    }

    botonAgregar[indice].addEventListener("click", agregarElementoCarrito);
}
