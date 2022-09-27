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
                       <input type = "text" id = "name" name = "userName" placeholder = "Tu nombre" required>
                       <label for = "userDni">DNI</label>
                       <input type ="number" id ="dni" userDni = "dni" placeholder = "11222333" required>
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
                           <input type = "text" id = "name" name = "userName" placeholder = "Juan" required>
                           <label for = "surName">Apellido</label>
                           <input type = "text" id = "surName" surName = "userSurame" placeholder = "Perez" required>
                           <label for = "userDni">DNI</label>
                           <input type ="number" id ="dni" userDni = "dni" placeholder = "12345698" required>
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
                        <img class = "home__img" src="./Images/BodyImage.jpg" alt="inversion">
                        </section>                        
                        <p class = "home__p">Seleccioná Ingresar en el menú para comenzar o Registrate</p>
    
    `
}

// Ingreso de Usuario por validación de nombre y Dni
function ingresar() {
    const login = document.getElementById('login');
    const userName = document.getElementById('name');
    const userDni = document.getElementById('dni');
    const existeDni = users.some(usuario => usuario.dni === userDni.value);
    if (existeDni == true && userName.value === searchName(dni.value) ) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Ingresaste correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        homeUser(userName.value, userDni.value);
    } else if (existeDni == true && userName.value != searchName(dni.value)) {
        Swal.fire({
            title:'DNI o Nombre Incorrecto',
            background: '#f2c66b',
        })
    }  else {
        Swal.fire({
            title: 'DNI no existe. Hace click en registrarte',
            background: '#f2c66b',
    })
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
                           <a class="nav_link" id= "addInvest"  href="#">Agregar Inversión</a>
                           <a class="nav_link" id = "consInvest" href="#">Consutlar Cartera</a>
                           <a class="nav_link" id = "delInvest" href="#">Borrar Inversión</a>
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
                            <label for = "tag">Ticker</label>
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
        inversionCargada == null ? (
            localStorage.setItem(dni, JSON.stringify([inversion])),
            mensajeCargar (formInver)
        ) : (
            inversionCargada.push(inversion),
            localStorage.setItem(dni, JSON.stringify(inversionCargada)),
            mensajeCargar(formInver)
        )
    }     
}

// Pantalla despues de la carga de una inversion
function mensajeCargar (form) {
    Swal.fire({
        title: 'Cargaste correctamente tu inversión',
        imageUrl: './Images/pig.jpg',
        /* background: '#f2c66b', */
        icon: 'succes',
        imageWidth: 400,
        imageHigth: 200,
        showConfirmButton: false,
        timer: 2000
    })
    form.innerHTML = "";
    homeUser(nombre, dni);
}

 // Mostrar cartera de inversion 
function showInvest (dni) { 
    const mostrarCartera = document.getElementById('content');
    mostrarCartera.innerHTML = "";
    const listaInversiones = JSON.parse(localStorage.getItem(dni));
    if (listaInversiones != null) {
        const lista = document.createElement('div');
        lista.classList.add('row');
        lista.classList.add('row-cols-1');
        lista.classList.add('row-cols-md-4');
        lista.classList.add('g-4');
        mostrarCartera.appendChild(lista);
        for (let inversion of listaInversiones){
            const item = document.createElement('div');
            item.classList.add('col');
            item.innerHTML = `
                            <div class="card">
                            <img src="./Images/ImagenFondo.jpg" class="card-img-top" alt="monedas">
                            <div class="card-body">
                            <h5 class="card-title">${inversion.investName}</h5>
                            <p class="card-text"> Ticker: ${inversion.investTag}</p>
                            <p class="card-text"> Cantidad: ${inversion.investAmount}</p>
                            <p class="card-text"> Rendimiento Anual: ${inversion.investRate}%</p>
                            </div>
                            <div class="card-footer">
                            <small class="text-muted">Saldo proyectado en 1 año: proximamente</small>
                            </div>
            `
            lista.appendChild(item);
        }
    } else {
        Swal.fire({
            title: 'Tu cartera se encuentra vacia',
            background: '#f2c66b',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
} 

// Cotizaciones de Criptos (a futuro)

 
// borrar inversion
function deleteInvest(dni) {
    const contenido = document.getElementById('content');
    contenido.innerHTML = "";
    const text = document.createElement('p');
    text.innerText = `Elige la Cripto que deseas eliminar`;
    contenido.appendChild(text);
    const cartera = JSON.parse(localStorage.getItem(dni));
    const seleccionar = document.createElement('select');
    seleccionar.setAttribute('id', 'eleccion');
    cartera.forEach(element => {
        const coin = document.createElement('option')
        coin.setAttribute("value", `${element.investTag}`);
        coin.innerText= `${element.investName}`;
        seleccionar.appendChild(coin);
    }); 
    contenido.appendChild(seleccionar);
    const btnSelec = document.createElement('span');
    btnSelec.innerHTML = `
        <input type = "button" id = "Seleccionar" value = "Seleccionar">                
    ` 
    contenido.appendChild(btnSelec);
    const mostrar = document.getElementById('Seleccionar');
    const mostrarEleccion = document.createElement('div');
    contenido.appendChild(mostrarEleccion);
    mostrar.onclick = () => { //muestro la inversion seleccionada
        mostrarEleccion.innerHTML= "";
        const elegido = document.getElementById('eleccion')
        const carteraFiltrada = cartera.filter((item) => item.investTag === elegido.value);
        const lista = document.createElement('div');
        lista.classList.add('row');
        lista.classList.add('row-cols-1');
        lista.classList.add('row-cols-md-4');
        lista.classList.add('g-4');
        mostrarEleccion.appendChild(lista);
        for (let inversion of carteraFiltrada){
            const item = document.createElement('div');
            item.classList.add('col');
            item.innerHTML = `
                            <div class="card">
                            <img src="./Images/ImagenFondo.jpg" class="card-img-top" alt="monedas">
                            <div class="card-body">
                            <h5 class="card-title">${inversion.investName}</h5>
                            <p class="card-text"> Ticker: ${inversion.investTag}</p>
                            <p class="card-text"> Cantidad: ${inversion.investAmount}</p>
                            <p class="card-text"> Rendimiento Anual: ${inversion.investRate}%</p>
                            </div>
                            <div class="card-footer">
                            <input type = "button" id = "Borrar" value = "Eliminar">
                            </div>
            `
            lista.appendChild(item);
            const btnBorrar = document.getElementById('Borrar');
            btnBorrar.onclick = () => { //borrar la inversion 
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                  })     
                  swalWithBootstrapButtons.fire({
                    title: 'Confirmar la eliminación?',
                    text: "La inversión será borrada permanentemente!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Si, Borrar!',
                    cancelButtonText: 'No, Cancelar!!',
                    reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const nuevaCartera = cartera.filter(item => item.investTag != elegido.value);
                            localStorage.setItem(dni, JSON.stringify(nuevaCartera));     
                        swalWithBootstrapButtons.fire(
                            'Borrado!',
                            'Tu inversión se ha eliminado',
                            'success'
                        )
                        return showInvest(dni);
                    } else if ( result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire(
                        'Cancelado',
                        'Tu inversión sigue estando en tu cartera',
                        'error'
                        )
                        return showInvest(dni);
                        }
                    })
                }
            }
        }
    }
}