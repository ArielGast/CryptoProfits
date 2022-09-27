const clickIngresar = document.getElementById('ingresar');
clickIngresar.onclick = () => {
    logIn();
}

const clickHome = document.getElementById('home');
clickHome.onclick = () => {
    home();
}
const registrarse = document.getElementById('registrarse');
registrarse.onclick = () => {
    newUser();
}
    
const inicio = document.getElementById('login');
inicio.onload = home();

const verCotizaciones = document.getElementById('cotizaciones');
verCotizaciones.onclick = () => {
    const contenido = document.getElementById('login');
    contenido.innerHTML = "";
    const elemento = document.getElementById('content');
    elemento.innerHTML = "";
    const parrafo = document.createElement('h3');
    parrafo.innerHTML = ` Proximamente`;
    contenido.appendChild(parrafo); 
}

