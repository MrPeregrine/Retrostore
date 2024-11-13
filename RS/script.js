// Lista de productos
const productos = [
    // Juguetes
    { nombre: "Tamagotchi", categoria: "juguetes", decada: "90's", precio: 15 },
    { nombre: "Megatron", categoria: "juguetes", decada: "80's", precio: 80 },
    { nombre: "Furby", categoria: "juguetes", decada: "90's", precio: 25 },
    { nombre: "Yu-Gi-Oh! Cards", categoria: "juguetes", decada: "2000's", precio: 10 },

    // Videojuegos
    { nombre: "Super Mario 64", categoria: "videojuegos", decada: "90's", precio: 40 },
    { nombre: "Sonic the Hedgehog", categoria: "videojuegos", decada: "90's", precio: 35 },
    { nombre: "The Legend of Zelda", categoria: "videojuegos", decada: "80's", precio: 50 },
    { nombre: "Halo: Combat Evolved", categoria: "videojuegos", decada: "2000's", precio: 45 },

    // Juegos de Mesa
    { nombre: "Monopoly", categoria: "juegos_de_mesa", decada: "80's", precio: 25 },
    { nombre: "Risk", categoria: "juegos_de_mesa", decada: "90's", precio: 30 },
    { nombre: "Settlers of Catan", categoria: "juegos_de_mesa", decada: "2000's", precio: 35 },
    { nombre: "Trivial Pursuit", categoria: "juegos_de_mesa", decada: "80's", precio: 20 }
];

// Carrito de compras
const carrito = [];

// Función para mostrar productos en el catálogo
function mostrarProductos(lista) {
    const productosLista = document.getElementById("productos-lista");
    productosLista.innerHTML = "";  // Limpiar la lista antes de agregar los productos

    lista.forEach(producto => {
        const item = document.createElement("div");
        item.classList.add("producto");
        item.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        `;
        productosLista.appendChild(item);
    });
}

// Función para filtrar productos por categoría y década
function filtrarProductosPorDecada(categoria) {
    const decadaSeleccionada = document.getElementById("decada").value;

    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = producto.categoria === categoria;
        const coincideDecada = decadaSeleccionada === "todas" || producto.decada === decadaSeleccionada;
        return coincideCategoria && coincideDecada;
    });

    mostrarProductos(productosFiltrados);
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    alert(`${nombre} ha sido agregado al carrito.`);
}

// Inicialización de página para cargar los productos específicos de la categoría
document.addEventListener("DOMContentLoaded", function() {
    const categoria = window.location.pathname.includes("juguetes") ? "juguetes" :
                      window.location.pathname.includes("videojuegos") ? "videojuegos" : "juegos_de_mesa";
    filtrarProductosPorDecada(categoria);  // Mostrar todos los productos de la categoría al cargar la página
});
