const carrito = [];

function abrirCarrito() {
  document.getElementById('carritoVentana').style.display = 'block';
 
  document.getElementById('logoBTC').style.display = 'block';
}

function cerrarCarrito() {
  document.getElementById('carritoVentana').style.display = 'none';
  
  document.getElementById('logoBTC').style.display = 'none';
}

document.getElementById('carritoButton').addEventListener('click', () => {
  abrirCarrito();
});

document.getElementById('cerrarCarrito').addEventListener('click', () => {
  cerrarCarrito();
});

function agregarAlCarrito(id, nombreProducto, precioProducto) {
  const productoExistente = carrito.find((producto) => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: id,
      nombre: nombreProducto,
      cantidad: 1,
      precio: precioProducto,
    });
  }

  contarCarrito();
  mostrarCarrito();
}

document.querySelectorAll(".add").forEach((botonAgregar, index) => {
  botonAgregar.addEventListener("click", () => {
    const nombre = botonAgregar.getAttribute("data-nombre");
    const precio = parseFloat(botonAgregar.getAttribute("data-precio"));
    const id = index + 1;
    agregarAlCarrito(id, nombre, precio);
  });
});

function contarCarrito() {
  const cantidadCarrito = carrito.reduce((total, producto) => total + producto.cantidad, 0);
  document.getElementById("cantidadCarrito").textContent = cantidadCarrito;
}

function mostrarCarrito() {
  const carritoElement = document.getElementById("carritoProductos");
  carritoElement.innerHTML = "";

  carrito.forEach((producto) => {
    const productoHTML = document.createElement("div");
    productoHTML.classList.add("producto-carrito");
    productoHTML.innerHTML = `
      <span>${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${(producto.precio * producto.cantidad).toFixed(2)}</span>
    `;

    carritoElement.appendChild(productoHTML);
  });
}
