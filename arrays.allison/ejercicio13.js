function mostrarListaForEach(productos) {
  console.log("Lista del mercado:");
  productos.forEach((producto, i) => {
    console.log((i + 1) + ". " + producto);
  });
  console.log("Total: " + productos.length + " productos");
}


