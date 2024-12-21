console.log ("OK")
const zonaServicio=document.getElementById ("zona").value
console.log ("zonaServicio")

function verificarZona(){
    console.log(zonaServicio.value);
    let zona=zonaServicio.value;
    if(zona ==="CABA"||zona=== "GBA SUR"||zona==="GBA OESTE"){
        console.log ("Podemos visitarte")
        MensajeZona.innerText= "Podemos visitarte";
    } else }
        console.log ("Por el momento,no podemos visitarte")
        MensajeZona.innerText="Por el momento, no podemos visitarte";
    }
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
    nombre:"Botinero doble"
    descripcion:"Este hermoso botinero te la posibilidad de guardar tu calzado en un mueble a la vista pero con mucho estilo",
    
    precio:$55.590
},

{
    nombre:"Organizadores"
    descripcion: "Tu mejor opción para tener todo en un solo lugar",
    imagen:"
    precio:125700
},
{
    nombre:"Cocinas"
    descripcion:"Podemos hacer el modelo que se ajuste a tu presupuesto y espacio"
    imagen:"
    precio:75699
},
{
    nombre:"Recibidor",
    descripcion:"Para darle ese toque cálido a tu hogar",
    imagen:"
    precio:38999
}]

let productos="";
for (let indice=0; indice<productos.length;indice++){

}

