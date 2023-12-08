//Organice las variables y las puse al principio
const li = document.querySelector("#lista-de-productos");
const inputBuscar = document.querySelector('#input-buscar');
const botonDeFiltro = document.querySelector("#btn-filtrar");
botonDeFiltro.addEventListener('click', mostrarProductos);
// Tenemos un li de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]




// Comente todo esto por que era duplicado*****************************************************

// for (let i = 0; i < productos.length; i++) {
//   const div = document.createElement("div")
//   div.classList.add("producto")

//   const ti = document.createElement("p")
//   ti.classList.add("titulo")
//   ti.textContent = productos[i].nombre

//   const imagen = document.createElement("img");
//   imagen.setAttribute('src', productos[i].img);

//   div.appendChild(ti)
//   div.appendChild(imagen)

//   li.appendChild(div)
// }

// displayProductos(productos)





//Cambie el onclik por adevent listener y mejore la legibilidad
function mostrarProductos() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = inputBuscar.value;
  const productosFiltrados = filtrado(productos, texto);


  for (let i = 0; i < productosFiltrados.length; i++) {
    const div = document.createElement("div")
    div.classList.add("producto")

    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre

    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);

    const tipo = document.createElement("p");
    tipo.textContent = productosFiltrados[i].tipo;

    div.appendChild(ti)
    div.appendChild(imagen)
    div.appendChild(tipo)

    li.appendChild(div);
  }
}

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  