let productos = [
  {
    nombre: "Buzo de lana suelto",
    precio: 4500,
    categoria: "buzos",
    imagen: "img/buzos/producto1.jpg"
  },
  {
    nombre: "Buzo clasico de algodon",
    precio: 3500,
    categoria: "buzos",
    imagen: "img/buzos/producto2.jpg"
  },
  {
    nombre: "Buzo de algodon finito",
    precio: 2499,
    categoria: "buzos",
    imagen: "img/buzos/producto3.jpg"
  },
  {
    nombre: "Buzo corto liso de algodon",
    precio: 3600,
    categoria: "buzos",
    imagen: "img/buzos/producto4.jpg"
  },
  {
    nombre: "Buzo de algodon liso con bolsillos",
    precio: 5000,
    categoria: "buzos",
    imagen: "img/buzos/producto5.jpg"
  },
  {
    nombre: "Buzo back off de algodon",
    precio: 3999,
    categoria: "buzos",
    imagen: "img/buzos/producto6.jpg"
  },
  {
    nombre: "Campera kinnestorm roja",
    precio: 8500,
    categoria: "camperas",
    imagen: "img/camperas/producto7.jpg"
  },
  {
    nombre: "Campera de cuero clasica",
    precio: 8599,
    categoria: "camperas",
    imagen: "img/camperas/producto8.jpg"
  },
  {
    nombre: "Campera de cuero corta",
    precio: 7900,
    categoria: "camperas",
    imagen: "img/camperas/producto9.jpg"
  },
  {
    nombre: "Saco de lana",
    precio: 7300,
    categoria: "camperas",
    imagen: "img/camperas/producto10.jpg"
  },
  {
    nombre: "Blaizzer rojo largo",
    precio: 8699,
    categoria: "camperas",
    imagen: "img/camperas/producto11.jpg"
  },
  {
    nombre: "Jean oxford liso negro",
    precio: 5799,
    categoria: "jeans",
    imagen: "img/jeans/producto12.jpg"
  },
  {
    nombre: "Jean acampanado celeste",
    precio: 5700,
    categoria: "jeans",
    imagen: "img/jeans/producto13.jpg"
  },
  {
    nombre: "Jean estilo babucha baige",
    precio: 6500,
    categoria: "jeans",
    imagen: "img/jeans/producto14.jpg"
  },
  {
    nombre: "Jean vintage",
    precio: 5700,
    categoria: "jeans",
    imagen: "img/jeans/producto15.jpg"
  },
  {
    nombre: "Jean tiro alto oscuro roto",
    precio: 7000,
    categoria: "jeans",
    imagen: "img/jeans/producto16.jpg"
  },
  {
    nombre: "Jean acampanado metalizado",
    precio: 5200,
    categoria: "jeans",
    imagen: "img/jeans/producto17.jpg"
  },
  {
    nombre: "Pantalon gabardina oscuro",
    precio: 7900,
    categoria: "pantalones",
    imagen: "img/pantalones/producto18.jpg"
  },
  {
    nombre: "Pantalon sastrero",
    precio: 9599,
    categoria: "pantalones",
    imagen: "img/pantalones/producto19.jpg"
  },
  {
    nombre: "Pantalon chupin algodon",
    precio: 8500,
    categoria: "pantalones",
    imagen: "img/pantalones/producto20.jpg"
  },
  {
    nombre: "Pantalon tiro alto de algodon",
    precio: 7500,
    categoria: "pantalones",
    imagen: "img/pantalones/producto21.jpg"
  },
  {
    nombre: "Pantalon suelto de gabardina",
    precio: 8600,
    categoria: "pantalones",
    imagen: "img/pantalones/producto22.jpg"
  },
  {
    nombre: "Pantalon estilo babucha cargo",
    precio: 8999,
    categoria: "pantalones",
    imagen: "img/pantalones/producto23.jpg"
  },
  {
    nombre: "Remera manga corta lisa",
    precio: 3500,
    categoria: "remeras",
    imagen: "img/remeras/producto24.jpg"
  },
  {
    nombre: "Top haily escotado",
    precio: 4300,
    categoria: "remeras",
    imagen: "img/remeras/producto25.jpg"
  },
  {
    nombre: "Remera floriada corta",
    precio: 2700,
    categoria: "remeras",
    imagen: "img/remeras/producto26.jpg"
  },
  {
    nombre: "Camisa suelta mostaza",
    precio: 3000,
    categoria: "remeras",
    imagen: "img/remeras/producto27.jpg"
  },
  {
    nombre: "Top mary con mangas largas",
    precio: 3500,
    categoria: "remeras",
    imagen: "img/remeras/producto28.jpg"
  },
  {
    nombre: "Remera con bolados lisa",
    precio: 3200,
    categoria: "remeras",
    imagen: "img/remeras/producto29.jpg"
  },
  {
    nombre: "Camisa de algodon negra",
    precio: 4000,
    categoria: "remeras",
    imagen: "img/remeras/producto30.jpg"
  },
  {
    nombre: "Vestido leila con tiras de strass",
    precio: 7399,
    categoria: "vestidos",
    imagen: "img/vestidos/producto31.jpg"
  },
  {
    nombre: "Vestido liso largo de una manga",
    precio: 9500,
    categoria: "vestidos",
    imagen: "img/vestidos/producto32.jpg"
  },
  {
    nombre: "Vestido largo mediano de algodon",
    precio: 9500,
    categoria: "vestidos",
    imagen: "img/vestidos/producto33.jpg"
  },
  {
    nombre: "Vestido de brillos corto",
    precio: 8299,
    categoria: "vestidos",
    imagen: "img/vestidos/producto34.jpg"
  },
  {
    nombre: "Vestido liso a medida en los lados",
    precio: 7800,
    categoria: "vestidos",
    imagen: "img/vestidos/producto35.jpg"
  },
  {
    nombre: "Vestido ajustado corto con bolados",
    precio: 6999,
    categoria: "vestidos",
    imagen: "img/vestidos/producto36.jpg"
  },
  ];

  localStorage.setItem("productos", JSON.stringify(productos));
    
  localStorage.setItem("productosStringify", JSON.stringify(productos));
    
  let productosStringify = localStorage.getItem("productosStringify");
  let productosParseados = JSON.parse(localStorage.getItem("productosStringify"));
  const productosContainer = document.getElementById("productos-container");
  const categoria = document.querySelector('body').getAttribute('data-categoria');
  const productosPorCategoria = productos.filter(producto => producto.categoria === categoria);
    
  function cargarProductos() {
    const productosContainer = document.querySelector('#productos-container');
    
    productosPorCategoria.forEach((producto, indice) => {
      const productoDiv = crearProductoDOM(producto, indice);
      productosContainer.appendChild(productoDiv);
    });
  }
    
  function crearProductoDOM(producto, indice) {
    const productoDiv = document.createElement('div');
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    productoDiv.appendChild(imagen);
    productoDiv.classList.add('product-card');
    
    const nombre = document.createElement('h4');
    nombre.classList.add('text-product');
    nombre.textContent = producto.nombre;
    productoDiv.appendChild(nombre);
    
    const precio = document.createElement('p');
    precio.textContent = `$${producto.precio}`;
    productoDiv.appendChild(precio);
    
    const boton = document.createElement('button');
    boton.classList.add('btn', 'btn-sm', 'btn-outline-dark', 'add-to-cart-btn');
    boton.textContent = 'Agregar al carrito';
    boton.setAttribute('data-product', indice);
    productoDiv.appendChild(boton);
    
    return productoDiv;
  }
  
  window.addEventListener('DOMContentLoaded', cargarProductos);
  
  const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');

  // evento de click al botón
  finalizarCompraBtn.addEventListener('click', () => {
  // SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Compra exitosa',
      text: '¡Gracias por comprar!',
    }) .then(() => {
      // vacíar el carrito
      localStorage.removeItem('productosEnCarrito');
      mostrarCarrito(); 
    });
  });

  productosContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-btn')) {
      const productIndex = parseInt(event.target.getAttribute('data-product'));
  
      if (!isNaN(productIndex) && productIndex >= 0 && productIndex < productosPorCategoria.length) {
        const productToAdd = productosPorCategoria[productIndex];
        console.log(`Producto agregado al carrito: ${productToAdd.nombre}`);
  
        const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
        productosEnCarrito.push(productToAdd);
        localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
  
        mostrarNotificacion('Agregado al carrito');
      } else {
        console.log('Error: Producto no encontrado');
      }
    }
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
  
    productosEnCarrito.forEach(producto => {
      console.log(`Producto en el carrito: ${producto.nombre}`);
    });
  });
  
  function mostrarNotificacion(mensaje) {
    Toastify({
      text: mensaje,
      duration: 2000,
      newWindow: true,
      gravity: 'top',
      position: 'right',
      style: {
        background: 'linear-gradient(to left, #956fb9, #7a678b)'
      },
      stopOnFocus: true,
    }).showToast();
  }
  
  
  
  // muestra los productos en el carrito
  function mostrarCarrito() {
    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    const productosEnCarritoUl = document.getElementById('productosEnCarrito');
    const subtotalPrecio = document.getElementById('subtotalPrecio');

      productosEnCarritoUl.innerHTML = '';
      let subtotal = 0;

      productosEnCarrito.forEach((producto, indice) => {
        const li = document.createElement('li');

        // img del producto
        const imagenProducto = document.createElement('img');
        imagenProducto.src = producto.imagen;
        imagenProducto.alt = producto.nombre;
        li.appendChild(imagenProducto);

        // nombre y precio del producto
        const nombrePrecio = document.createElement('span');
        nombrePrecio.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        li.appendChild(nombrePrecio);

        // eliminar el producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-sm', 'btn-outline-danger');
        botonEliminar.addEventListener('click', () => eliminarProductoDelCarrito(indice));
        li.appendChild(botonEliminar);

        productosEnCarritoUl.appendChild(li);

        subtotal += producto.precio;
      });

      // Actualiza el subtotal
      subtotalPrecio.textContent = `$${subtotal.toFixed(2)}`;
      // botón "Finalizar compra" si hay productos en el carrito
      if (productosEnCarrito.length > 0) {
        finalizarCompraBtn.style.display = 'block';
      } else {
        finalizarCompraBtn.style.display = 'none';
      }
    }

  
  // eliminar producto del carrito
  function eliminarProductoDelCarrito(indice) {
    const productosEnCarrito = JSON.parse(localStorage.getItem('productosEnCarrito')) || [];
    
    if (indice >= 0 && indice < productosEnCarrito.length) {
      productosEnCarrito.splice(indice, 1);
      localStorage.setItem('productosEnCarrito', JSON.stringify(productosEnCarrito));
      mostrarCarrito(); // Actualiza la vista del carrito
    }
  }
  
  // Muestra el modal en el icono
  document.querySelector('.navbar-text a').addEventListener('click', () => {
    mostrarCarrito();
    $('#carritoModal').modal('show');
  });
  
  // botón "Vaciar Carrito"
  document.getElementById('vaciarCarrito').addEventListener('click', () => {
    localStorage.removeItem('productosEnCarrito');
    mostrarCarrito();
  });
  
  window.addEventListener('DOMContentLoaded', mostrarCarrito);
  
  
  // botón "Cerrar" en el modal
  document.getElementById('cerrarCarritoModal').addEventListener('click', () => {
    $('#carritoModal').modal('hide');
  });
            
  // Verifica si el formulario con el id "newsletter-form" existe
  const newsletterForm = document.getElementById('newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;

      const data = {
        nombre,
        email
      };

      // Realiza una solicitud POST a JSONPlaceholder (endpoint /posts)
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta de JSONPlaceholder:', data);

        Swal.fire({
          icon: 'success',
          title: '¡Inscripción exitosa!',
          text: 'Te has inscrito correctamente al newsletter.'
        });
        
        // vaciar form
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
      })
      .catch(error => {
        console.error('Error:', error);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error al inscribirte al newsletter.'
        });
      });
    });
  }
