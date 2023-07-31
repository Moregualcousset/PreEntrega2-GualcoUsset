// Funcion de registrar
function mostrarBienvenida() {
  let nombre = "";
  while (!nombre || nombre.trim() === "") {
    nombre = prompt("¡Bienvenido a nuestro sitio! Por favor, ingresa tu nombre:");
  }

  let contrasena = "";
  while (contrasena.trim() === "") {
    contrasena = prompt("Hola, " + nombre + ". Ahora, ingresa tu contraseña:");
  }

  alert("¡Bienvenido, " + nombre + "!");
}

window.onload = function () {
  mostrarBienvenida();
};


//array de objetos de productos
const productos = [
  {
    nombre: "Producto 1",
    precio: 4500,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 2",
    precio: 3500,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 3",
    precio: 2499,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 4",
    precio: 3600,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 5",
    precio: 5000,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 6",
    precio: 3999,
    categoria: "Buzo",
  },
  {
    nombre: "Producto 7",
    precio: 8500,
    categoria: "Campera",
  },
  {
    nombre: "Producto 8",
    precio: 8599,
    categoria: "Campera",
  },
  {
    nombre: "Producto 9",
    precio: 7900,
    categoria: "Campera",
  },
  {
    nombre: "Producto 10",
    precio: 7300,
    categoria: "Campera",
  },
  {
    nombre: "Producto 11",
    precio: 8699,
    categoria: "Ropa",
  },
  {
    nombre: "Producto 12",
    precio: 5799,
    categoria: "Jean",
  },
  {
    nombre: "Producto 13",
    precio: 5700,
    categoria: "Jean",
  },
  {
    nombre: "Producto 14",
    precio: 6500,
    categoria: "Jean",
  },
  {
    nombre: "Producto 15",
    precio: 5700,
    categoria: "Jean",
  },
  {
    nombre: "Producto 16",
    precio: 7000,
    categoria: "Jean",
  },
  {
    nombre: "Producto 17",
    precio: 5200,
    categoria: "Jean",
  },
  {
    nombre: "Producto 18",
    precio: 7900,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 19",
    precio: 9599,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 20",
    precio: 8500,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 21",
    precio: 7500,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 22",
    precio: 8600,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 23",
    precio: 8999,
    categoria: "Pantalon",
  },
  {
    nombre: "Producto 24",
    precio: 3500,
    categoria: "Remera",
  },
  {
    nombre: "Producto 25",
    precio: 4300,
    categoria: "Remera",
  },
  {
    nombre: "Producto 26",
    precio: 2700,
    categoria: "Remera",
  },
  {
    nombre: "Producto 27",
    precio: 3000,
    categoria: "Remera",
  },
  {
    nombre: "Producto 28",
    precio: 3500,
    categoria: "Remeras",
  },
  {
    nombre: "Producto 29",
    precio: 3200,
    categoria: "Remera",
  },
  {
    nombre: "Producto 30",
    precio: 4000,
    categoria: "Remera",
  },
  {
    nombre: "Producto 31",
    precio: 7399,
    categoria: "Vestido",
  },
  {
    nombre: "Producto 32",
    precio: 9500,
    categoria: "Vestido",
  },
  {
    nombre: "Producto 33",
    precio: 9500,
    categoria: "Vestido",
  },
  {
    nombre: "Producto 34",
    precio: 8299,
    categoria: "Vestido",
  },
  {
    nombre: "Producto 35",
    precio: 7800,
    categoria: "Vestido",
  },
  {
    nombre: "Producto 36",
    precio: 6999,
    categoria: "Vestido",
  },
];

// Find
const nombreProductoBuscado = "Producto 30";
const productoBuscado = productos.find((producto) => producto.nombre === nombreProductoBuscado);

if (productoBuscado) {
  console.log("Producto encontrado:", productoBuscado);
} else {
  console.log("Producto no encontrado");
}

// Array para sumar productos
function sumarProductos(arrayProductos, ...nombresProductos) {
  let suma = 0;
  for (const nombreProducto of nombresProductos) {
    const productoEncontrado = arrayProductos.find(
      (producto) => producto.nombre === nombreProducto
    );
    if (productoEncontrado) {
      suma += productoEncontrado.precio;
    } else {
      console.log(`Producto '${nombreProducto}' no encontrado.`);
    }
  }
  return suma;
}

// Ejemplo de suma
const total = sumarProductos(productos, "Producto 20", "Producto 13");
console.log("Total:", total);




