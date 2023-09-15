let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarritoEnLocalStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarProducto(nombre, precio) {
  const producto = {
    nombre: nombre,
    precio: precio,
  };
  carrito.push(producto);

  document.getElementById('cantidadCarrito').textContent = carrito.length;

  if (nombre === 'BTC') {
    document.getElementById('logoBTC').style.display = 'block';
  }

  guardarCarritoEnLocalStorage();
}

document.querySelectorAll('.add').forEach((boton) => {
  boton.addEventListener('click', (event) => {
    const nombre = event.target.getAttribute('data-nombre');
    const precio = parseFloat(event.target.getAttribute('data-precio'));
    agregarProducto(nombre, precio);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('cantidadCarrito').textContent = carrito.length;

  if (carrito.some(producto => producto.nombre === 'BTC')) {
    document.getElementById('logoBTC').style.display = 'block';
  }
});

function inicializar() {
  // Puedes realizar otras acciones de inicialización aquí si es necesario
}

inicializar();
