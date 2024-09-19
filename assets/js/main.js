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
let actualDesktop = 0;
let actualMobile = 0;

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
    actualDesktop++;
    if (actualDesktop >= totalImagenesDesktop) {
        actualDesktop = 0; // Volver a la primera imagen
    }
    mostrarImagenDesktop(actualDesktop);
    posicionCarruselD(); // Actualizar los puntos del carrusel
}

function anterior() {
    actualDesktop--;
    if (actualDesktop < 0) {
        actualDesktop = totalImagenesDesktop - 1; // Ir a la última imagen
    }
    mostrarImagenDesktop(actualDesktop); 
    posicionCarruselD(); // Actualizar los puntos del carrusel
}

// Cambia de imagen del carrusel en Descktop cada 10 segundos
setInterval(() => {
    siguiente();
}, 10000);

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
    actualMobile++;
    if (actualMobile >= totalImagenesMobile) {
        actualMobile = 0; // Volver a la primera imagen
    }
    mostrarImagenMobile(actualMobile);
    posicionCarruselM()
}

function anteriorMobile() {
    actualMobile--;
    if (actualMobile < 0) {
        actualMobile = totalImagenesMobile - 1; // Ir a la última imagen
    }
    mostrarImagenMobile(actualMobile);
    posicionCarruselM()
}

// Cambia de imagen del carrusel en Mobile cada 10 segundos
setInterval(() => {
    siguienteMobile();
}, 10000);

// Actualizar la ubicacion de la imagen en el carrusel en Descktop
function posicionCarruselD(){
    puntos.innerHTML = ``;
    for(var i = 0; i < totalImagenesDesktop; i++){
        if(i == actualDesktop){
            puntos.innerHTML += `<p class="bold">.</p>`;
        }else{
            puntos.innerHTML += `<p>.</p>`;
        }
    }
}

// Actualizar la ubicacion de la imagen en el carrusel en mobile
function posicionCarruselM(){
    puntosM.innerHTML = ``;
    for(var i = 0; i < totalImagenesMobile; i++){
        if(i == actualMobile){
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
mostrarImagenDesktop(actualDesktop);
mostrarImagenMobile(actualMobile);

// accedemos a la imagenes 
let slideImages = document.querySelectorAll('.slides img');
// accedemos a los botones
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
// accedemos a los indicadores
let dots = document.querySelectorAll('.dot');
//controla la imagen actual
let index  = 0;

// funcion que se ejecutara en el boton next
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[index].style.animation = 'next1 0.5s ease-in forwards';
    if(index >= slideImages.length-1){
        index = 0;
    }
    else{
        index++;
    }
    slideImages[index].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// funcion que se ejecuta para el boton anterior
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[index].style.animation = 'prev1 0.5s ease-in forwards';
    if(index == 0){
        index = slideImages.length-1;
    }
    else{
        index--;
    }
    slideImages[index].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// Funcion para que sea autodelizamiento
function autoSliding(){
    deletInterval = setInterval(timer, 10000); //10000 indica que se dezliza a los 10s
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// detiene el slide cuando el raton esta sobre el slide
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// Continua con el deslizamiento de slide
container.addEventListener('mouseout', autoSliding);

// actualiza los indicadores
function indicators(){
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[index].className += ' active';
}

// funcion para cambiar la imagen al hacer click en un indicador
function switchImage(currentImage){
    currentImage.classList.add('active');
    let imageId = currentImage.getAttribute('attr');
    if(imageId > index){
        slideImages[index].style.animation = 'next1 0.10s ease-in forwards';
        index = imageId;
        slideImages[index].style.animation = 'next2 0.10s ease-in forwards';
    }
    else if(imageId == index){
        return;
    }
    else{
        slideImages[index].style.animation = 'prev1 0.10s ease-in forwards';
        index = imageId;
        slideImages[index].style.animation = 'prev2 0.10s ease-in forwards';    
    }
    indicators();
}