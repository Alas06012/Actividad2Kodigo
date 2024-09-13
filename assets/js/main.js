// Obtenemos el elemento del icono del menú y el menú en sí
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('phone-menu-section');

// Escuchamos el clic en el icono de menú
menuIcon.addEventListener('click', () => {
    // Alternamos la clase 'active' para mostrar/ocultar el menú
    menu.classList.toggle('active');
});

// Función para quitar la clase 'active' cuando la pantalla es mayor a 767px
function handleResize() {
    if (window.innerWidth > 767) {
        menu.classList.remove('active');
    }
}

// Ejecutar la función de manejo de redimensionado cuando la ventana se redimensione
window.addEventListener('resize', handleResize);

// Ejecutar la función al cargar la página, por si el tamaño inicial de la pantalla ya es mayor a 767px
handleResize();