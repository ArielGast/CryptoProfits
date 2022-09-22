// funcion constructora Users
function User (nombreUs, apellidoUs, dni ) {
    this.nombreUs = nombreUs;
    this.apellidoUs = apellidoUs;
    this.dni = dni;
} 

// funcion constructora Inversion
function Invest (investName, investTag, investAmount, investRate) {
    this.investName = investName;
    this.investTag= investTag;
    this.investAmount = investAmount;
    this.investRate = investRate;
}

// Login
function logIn () {
    const login = document.getElementById('login');
    const content = document.getElementById('content');
    content.innerHTML = "";
    login.innerHTML = "";
    login.innerHTML = `<h2>Ingreso de Usuarios</h2>
                       <form id = "form_login">
                       <label for = "name">Nombre</label>
                       <input type = "text" id = "name" name = "userName" required>
                       <label for = "userDni">DNI</label>
                       <input type ="number" id ="dni" userDni = "dni" required>
                       <input type = "button" id = "enviar_form" value="Login">
                       </form>
                       <section class = "wrapper">
                       <span class="texto">No sos usuario?</span>
                       <button type = "submit" id = "new-user">Registrate</button>
                       </section>
                      `
    const clickNewUser = document.getElementById('new-user');
    clickNewUser.onclick = () => { 
        newUser()
    }; 
    const clickLogin = document.getElementById('enviar_form');
    clickLogin.onclick = () => {
        ingresar();
    }
}

// Cargar nuevo usuario y gardarlo en localStorage
function newUser () {
    const contenido = document.querySelector('#login');
    contenido.innerHTML = "";
    contenido.innerHTML = `<h3>Ingresa tus datos en el siguiente formulario</h3>
                           <form id = "form_usuario">
                           <label for = "name">Nombre</label>
                           <input type = "text" id = "name" name = "userName" required>
                           <label for = "surName">Apellido</label>
                           <input type = "text" id = "surName" surName = "userSurame" required>
                           <label for = "userDni">DNI</label>
                           <input type ="number" id ="dni" userDni = "dni" required>
                           <input type = "button" id="enviar_form" value ="Enviar">
                           </form>`
    const userName = document.getElementById('name');
    const userSurname = document.getElementById('surName');
    const userDni = document.getElementById('dni');
    const enviar = document.getElementById('enviar_form');
    enviar.onclick = () => {
        users.push(new User(userName.value, userSurname.value, userDni.value));
        localStorage.setItem('listaUsuarios', JSON.stringify(users));  
        contenido.innerHTML="";
        const parrafo = document.createElement('p');
        parrafo.innerText = `Usuario cargado correctamente`;
        contenido.append(parrafo);
    }
}

// Contenido del Home - Editar
function home() {
    const home = document.getElementById('login');
    const content = document.getElementById('content');
    content.innerHTML = "";
    home.innerHTML = "";
    home.innerHTML = `
                        <section class = "home">
                        <h1 class = "home__h1">Conocé y hacer crecer tus ahorros Criptos</h1>
                        <img class = "home__img" src="./Images/investment7a.jpg" alt="inversion">
                        </section>                        
                        <p class = "home__p">Seleccioná Ingresar en el menú para  comenzar o Registrate</p>
    
    `
}

// Ingreso de Usuario por validación de nombre y Dni
function ingresar() {
    const login = document.getElementById('login');
    const userName = document.getElementById('name');
    const userDni = document.getElementById('dni');
    const existeDni = users.some(usuario => usuario.dni === userDni.value);
    if (existeDni == true && userName.value === searchName(dni.value) ) {
        homeUser(userName.value, userDni.value);
    } else {
        const parrafo = document.createElement('p');
        parrafo.innerText = `DNI no existe . Hace click en registrarte`
        login.append(parrafo);
    }
}

// buscar nombre usuario por Dni
function searchName (dni) {
    const locatedName = users.find((el) => el.dni === dni );
    return locatedName.nombreUs;
}

// home de Usuario logueado
function homeUser (nombre, dni) {
    const contenido = document.getElementById('login');
    contenido.innerHTML = "";
    contenido.innerHTML = `<h3>Bienvenido ${nombre}</h3>
                           <nav class="navbar navbar-expand-lg">
                           <div class="container-fluid">
                           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                           <div class="navbar-nav">
                           <a class="nav-link" id= "addInvest"  href="#">Agregar Inversión</a>
                           <a class="nav-link" id = "consInvest" href="#">Consutlar Cartera</a>
                           <a class="nav-link" id = "delInvest" href="#">Borrar Inversión</a>
                           </div>
                           </div>
                           </div>
                           </nav>
    
    `
    const addInvest = document.getElementById('addInvest');
    addInvest.onclick = () => {
        agregarInversion(dni ,nombre);
    }     
    const consInvest = document.getElementById('consInvest');
    consInvest.onclick = () => {
        showInvest(dni, nombre);
    }
    const delInvest = document.getElementById('delInvest');
    delInvest.onclick = () => {
        deleteInvest(dni);
    }
}

// Agregar Inversión del usuario logueado
function agregarInversion (dni) {
    const formInver = document.getElementById('content');
    formInver.innerHTML = "";
    formInver.innerHTML = `
                            <h3>Ingresa los datos de la Cripto que tengas</h3>
                            <form id = "form_cripto">
                            <label for = "CriptoName">Nombre</label>
                            <input type = "text" id = "CriptoName" name = "CriptoName" required>
                            <label for = "tag">TAG</label>
                            <input type = "text" id = "tag" tag = "tag" required>
                            <label for = "Cantidad">Cantidad</label>
                            <input type ="number" id ="Cantidad" Cantidad = "Cantidad" required>
                            <label for = "Rendimiento">Rendimiento Anual</label>
                            <input type ="number" id ="Rendimiento" Rendimiento = "Rendimiento" required>
                            <input type = "button" id="enviar_form" value ="Cargar">
                            </form>
    
    `
    const investName = document.getElementById('CriptoName');
    const investTag = document.getElementById('tag');
    const investAmount =document.getElementById('Cantidad');
    const investRate = document.getElementById('Rendimiento');
    const cargarForm = document.getElementById('enviar_form');
    cargarForm.onclick = () => { 
        const inversion = new Invest(investName.value, investTag.value, investAmount.value, investRate.value);
        const inversionCargada = JSON.parse(localStorage.getItem(dni));
        if (inversionCargada == null) {
            localStorage.setItem(dni, JSON.stringify([inversion]))
            mensajeCargar (formInver);
        } else {
            inversionCargada.push(inversion);
            localStorage.setItem(dni, JSON.stringify(inversionCargada));
            mensajeCargar (formInver);
        } 
    }     
}

// Pantalla despues de la carga de una inversion
function mensajeCargar (form) {
    form.innerHTML = "";
    form.innerHTML = `
                    <p>Cargaste correctamente tu inversión</p>
                    <img class ="imagen_globo" src="./Images/inflandoGlobo.jpg" alt="inflando Globo">
    `
}

 // Mostrar cartera de inversion 
function showInvest (dni) { 
    const mostrarCartera = document.getElementById('content');
    mostrarCartera.innerHTML = "";
    const listaInversiones = JSON.parse(localStorage.getItem(dni));
    if (listaInversiones != null) {
        const lista = document.createElement('ul');
        mostrarCartera.appendChild(lista);
        for(let inversion of listaInversiones) {
            let li = document.createElement('li');
            li.innerHTML = `Cripto: ${inversion.investName} TAG: ${inversion.investTag} Cantidad: ${inversion.investAmount} Rendimiento Anual: ${inversion.investRate}%`;  
            lista.append(li);
        } 
    } else {
        const parrafo = document.createElement('p');
        parrafo.innerHTML = `No tienes ninguna inversión cargada`
        mostrarCartera.appendChild(parrafo);
    }
} 

// Cotizaciones de Criptos (a futuro)
function cotizaciones () {
    const contenido = document.getElementById('login')
    contenido.innerHTML = "";
    const elemento = document.getElementById('content');
    elemento.innerHTML = "";
    const parrafo = document.createElement('h3');
    parrafo.innerHTML = ` Proximamente`;
    contenido.appendChild(parrafo);
}

// borrar inversion
function deleteInvest(dni) {
    const contenido = document.getElementById('content');
    contenido.innerHTML = "";
    const cartera = JSON.parse(localStorage.getItem(dni));
    contenido.innerHTML = `
                        <h3>Ingresa el Tag de la cripto que deseas borrar</h3>
                        <input type = "text" id = "Tag" name = "tag" placeholder = "TAG" required>
                        <input type = "button" id = "validar" value = "validar">
                        `
    const validar = document.getElementById('validar');
    validar.onclick = () => {
        const tag = document.getElementById('Tag');
        const carteraFiltrada = cartera.filter((item) => item.investTag === tag.value);
        console.log(carteraFiltrada);
        for (let inversion of carteraFiltrada){
            const datos = document.createElement('p');
            datos.innerHTML = `Cripto: ${inversion.investName} TAG: ${inversion.investTag} Cantidad: ${inversion.investAmount} Rendimiento Anual: ${inversion.investRate}%`;
            contenido.appendChild(datos);
        }
        const btnBorrar = document.createElement('span');
        btnBorrar.innerHTML =`
                            <input type = "button" id = "btn_borrar" value = "Borrar">
        ` 
        contenido.appendChild(btnBorrar);
        const borrar = document.getElementById('btn_borrar');
        borrar.onclick = () => {
            const nuevaCartera = cartera.filter(item => item.investTag != tag.value);
            localStorage.setItem(dni, JSON.stringify(nuevaCartera)); 
            return showInvest(dni);           

        }
    }
}