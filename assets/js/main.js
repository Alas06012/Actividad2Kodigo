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

// Obtener los elementos
const imagenesDesktop = document.querySelectorAll('.desktop .imagenes img');
const imagenesMobile = document.querySelectorAll('.mobile .imagenes img');
const totalImagenesDesktop = imagenesDesktop.length;
const totalImagenesMobile = imagenesMobile.length;
let puntos = document.getElementById(`puntosDescktop`);
let puntosM = document.getElementById(`puntosMobile`);
let actual = 0;

//Mostrar la imagen actual en Desktop
function mostrarImagenDesktop(index) {
    // Oculta todas las imágenes
    imagenesDesktop.forEach(img => img.style.display = 'none');
    // Muestra la imagen actual
    imagenesDesktop[index].style.display = 'block';
    
    posicionCarruselD()
}

//Cambiar imágenes en Desktop
function siguiente() {
    actual++;
    if (actual >= totalImagenesDesktop) {
        actual = 0; // Volver a la primera imagen
    }
    mostrarImagenDesktop(actual);
    posicionCarruselD()
}

function anterior() {
    actual--;
    if (actual < 0) {
        actual = totalImagenesDesktop - 1; // Ir a la última imagen
    }
    posicionCarruselD()
    mostrarImagenDesktop(actual); 
}

//Mostrar la imagen actual en Mobile
function mostrarImagenMobile(index) {
    // Oculta todas las imágenes
    imagenesMobile.forEach(img => img.style.display = 'none');
    // Muestra la imagen actual
    imagenesMobile[index].style.display = 'block';
    posicionCarruselM()
}

//Cambiar imágenes en Mobile
function siguienteMobile() {
    actual++;
    if (actual >= totalImagenesMobile) {
        actual = 0; // Volver a la primera imagen
    }
    mostrarImagenMobile(actual);
    posicionCarruselM()
}

function anteriorMobile() {
    actual--;
    if (actual < 0) {
        actual = totalImagenesMobile - 1; // Ir a la última imagen
    }
    posicionCarruselM()
    mostrarImagenMobile(actual);
}

// Actualizar la ubicacion de la imagen en el carrusel en Descktop
function posicionCarruselD(){
    puntos.innerHTML = ``;
    for(var i = 0; i < totalImagenesDesktop; i++){
        if(i == actual){
            puntos.innerHTML += `<p class="bold">.<p>`;
        }else{
            puntos.innerHTML += `<p>.<p>`;
        }
    }
}

// Actualizar la ubicacion de la imagen en el carrusel en mobile
function posicionCarruselM(){
    puntosM.innerHTML = ``;
    for(var i = 0; i < totalImagenesMobile; i++){
        if(i == actual){
            puntosM.innerHTML += `<p class="bold">.<p>`;
        }else{
            puntosM.innerHTML += `<p>.<p>`;
        }
    }
}

// Condador de numeros
function animarContador(idElemento, valorFinal, duracion) {
    const elemento = document.getElementById(idElemento);
    let valorActual = 0;
    const incremento = valorFinal / (duracion / 10); // Ajuste del incremento según duración

    const contadorAnimacion = setInterval(() => {
        valorActual += incremento;
        if (valorActual >= valorFinal) {
            elemento.textContent = Math.floor(valorFinal); // Mostrar valor final
            clearInterval(contadorAnimacion); // Detener el intervalo cuando se llega al valor final
        } else {
            elemento.textContent = Math.floor(valorActual); // Actualizar el valor
        }
    }, 10); // La frecuencia de actualización es cada 10 ms
}

// Iniciar el contador hasta el número definido por los contenedores
animarContador('contador1', 358, 3000);
animarContador('contador2', 195, 3000);
animarContador('contador3', 2000, 3000);



// Ejecutar la función de manejo de redimensionado cuando la ventana se redimensione
window.addEventListener('resize', handleResize);

// Ejecutar la función al cargar la página, por si el tamaño inicial de la pantalla ya es mayor a 767px
handleResize();

// Inicializa mostrando la primera imagen en ambos carruseles
mostrarImagenDesktop(actual);
mostrarImagenMobile(actual);

// Cambia de imagen del carrusel cada 20 segundos
setInterval(() => {
    siguiente();
}, 20000);