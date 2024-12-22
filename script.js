console.log("OK")

const zonaServicio = document.getElementById("zona")

console.log(zonaServicio)


function verificarZona(){

    console.log(zonaServicio.value);

    let zona = zonaServicio.value;

    if (zona === "CABA" || zona === "GBA SUR" || zona === "GBA OESTE") {

        console.log("Podemos visitarte")

        MensajeZona.innerText =
            "Podemos visitarte";
    } else {
        console.log("Por el momento, no podemos visitarte")
        MensajeZona.innerText = "Por el momento, no podemos visitarte";

    }


    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const carritoLista = document.getElementById('lista-de-productos');
    const totalElement = document.getElementById('total');
    const vaciarCarritoButton = document.getElementById('vaciar-carrito')
}

const producto1={
    nombre:"Botinero doble"
    precio: 55590
};

const producto2={
    nombre:"Organizadores"
    precio:125700
};

const producto3={
    nombre:"Cocinas"
    precio:75699
};

const producto4={
    nombre:"Recibidor"
    precio: 38999
};

const productos=[
    nombre:  "Botinero doble",
    descripcion: "Este hermoso botinero te la posibilidad de guardar tu calzado en un mueble a la vista pero con mucho estilo",
    imagen: "imagenes/botinero doble.jpg",
    precio: 55.590
},

{
    nombre:"Organizadores",
    descripcion: "Tu mejor opción para tener todo en un solo lugar",
    imagen: "imagenes/interior de placard 2.jpg",
    precio: 125700
},
{
    nombre:"Cocinas",
    descripcion:"Podemos hacer el modelo que se ajuste a tu presupuesto y espacio",
    imagen:"imagenes/cocina 2.jpg",
    precio: 75699
},
{
    nombre:"Recibidor",
    descripcion:"Para darle ese toque cálido a tu hogar",
    imagen:"imagenes/recibidor.jpg",
    precio:38999
}]



const btnHacerClic=document.getElementById("btnHacerClic");
const lblClics=document.getElementById("lblClics");

let contador= 0;
function contarClics(){
    contador++;
    console.log(contador + "clics");
    lblClics.innerText=contador;
}

btnHacerClic.addEventListener("clic", contarClics)


console.log (productos[0].precio)

let productosHTML="";
for(let indice = 0; indice < productos.length; indice +++){
  
  productosHTML +=`
        <div class="botineros">
            <img src=${productos[indice].imagen}
            alt="foto de una pagina web para crear sitio web"><br> <span>${productos[indice].nombre}</span>
        <p>Precio promocional:$${productos[indice].precio}</p>
        <p>$${productos[ndice].descripcion}</p>
        <a href="">Ver + info</a>
        <input type="number"
        <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">
        </div>

` ;     
}

;
console.log(productosHTML);

const contenedorProductos=document.getElementById("contenedorProductos");
contenedorProductos.innerHTML=productosHTML;

const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");
console.log(botonAgregar);

const listaCarrito =document.querySelector("#carrito ul");
const totalCarrito=document.querySelector("#carrito p");

let totalAPagar = 0;

for (let indice = 0;indice < botonAgregar.length;indice++) {

    function agregarElementoCarrito (){
    console.log("clic " + indice) 
    const elementoLi= document.createElement("li");
    
    elementoLi.innerText = `producto ${productos[indice].nombre.precio} `;
    
    console.log(elementoLi);
    listaCarrito.appendChild(elementoLi);

    totalAPagar += productos[indice].precio;

    totalCarrito.innerText = "total a pagar. $"  + totalAPagar;

    }
    
    botonAgregar[indice].addEventListener("clic", agregarElementoCarrito);

    
}
