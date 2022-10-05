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
    login.innerHTML = `<h2 class = "login__h2">Ingreso de Usuarios</h2>
                       <div class = "login__div">
                       <div class = "form_login">
                       <label for = "name">Nombre</label>
                       <input type = "text" id = "name" name = "userName" placeholder = "Tu nombre" required>
                       <label for = "userDni">DNI</label>
                       <input type ="number" id ="dni" userDni = "dni" placeholder = "11222333" required>
                       <input type = "button" id = "enviar_form" value="Login">
                       </div>
                       </div>
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
                        <h1 class = "home__h1">Bienvenidos a CyberCat - Tus ganancias Cryptos en un solo lugar</h1>
                        <div class ="home__div">
                        <img class = "home__img" src="./Images/cat1.png" alt="inversion">
                        <div>
                        <p class = "home__p">En simples pasos resgistrate y comezá a tener control sobre tus ganacias por stacking de forma clara y sencilla.</p>
                        <p class = "home__p">En un solo lugar vas a poder ver tus Crytos y conocer el valor de tu cartera al instante.</p>
                        <p class = "home__p">Consultá la cotización del mercado Crypto en tiempo real y tomá las mejores decisiones.</p>
                        </div>
                        </div>
                        </section>                      
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
            width: 300,
            background: 'grey', 
            icon: 'success',
            title: 'Login correcto',
            showConfirmButton: false,
            timer: 1500
          })
        homeUser(userName.value, userDni.value);
    } else if (existeDni == true && userName.value != searchName(dni.value)) {
        Swal.fire({
            title:'DNI o Nombre Incorrecto',
            background: 'grey',
            icon: 'error',
            width: 300,
        })
    }  else {
        Swal.fire({
            title: 'DNI no existe. Hace click en registrarte',
            background: 'grey',
            icon: 'warning',
            width: 300
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
    contenido.innerHTML = `<h3 class = "homeUser__h3">Bienvenido ${nombre}</h3>
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
    let coin;
    let investName;
    let investTag;
    let investAmount;
    let investRate;
    const formInver = document.getElementById('content');
    formInver.innerHTML = "";
    const title = document.createElement('h3');
    title.innerHTML = `Ingresa los datos de la cripto que tengas`
    formInver.appendChild(title);
    const seleccionarTicker = document.createElement('select');
    seleccionarTicker.setAttribute('id', 'eleccion');
    formInver.appendChild(seleccionarTicker);
    fetch ('https://api.coinpaprika.com/v1/tickers')
    .then((respuesta) => respuesta.json())
    .then((tickers) => {
        tickers.forEach((ticker) => {
            coin = document.createElement('option')
            coin.setAttribute("value", `${ticker.symbol}`);
            coin.innerText= `${ticker.name}`;
            seleccionarTicker.appendChild(coin);
        });
        const cryptoSeleccionada = document.createElement('button');
        cryptoSeleccionada.innerText = `Seleccionar`;
        formInver.appendChild(cryptoSeleccionada);
        cryptoSeleccionada.onclick = () => { 
            const inversionesCargadas = JSON.parse(localStorage.getItem(dni));
            investTag = seleccionarTicker.value;
            const buscar = inversionesCargadas.find((ele) => ele.investTag == investTag);
            console.log(buscar);
            if (buscar) {
                Swal.fire({
                    icon: 'error',
                    title: 'Esta inversión ya la tenes cargada',
                    text: 'Something went wrong!',
                  })
            } else {
                const tag = document.createElement('p');
                tag.innerText = `Ticker: ${investTag}`;
                formInver.appendChild(tag);
                const tagName = tickers.find((ele) => ele.symbol === investTag);
                investName = tagName.name;
                const nombreCrypto = document.createElement('p');
                nombreCrypto.innerText = `Nombre ${investName}`;
                formInver.appendChild(nombreCrypto);
                const divisor = document.createElement('div');
                divisor.innerHTML = `
                                    <label for = "Cantidad">Cantidad</label>
                                    <input type ="number" id ="Cantidad" Cantidad = "Cantidad" required>
                                    <label for = "Rendimiento">Rendimiento Anual</label>
                                    <input type ="number" id ="Rendimiento" Rendimiento = "Rendimiento" required>
                                    <input type = "button" id="enviar_form" value ="Cargar">
                                        
                    ` 
                formInver.appendChild(divisor);
                investAmount =document.getElementById('Cantidad');
                investRate = document.getElementById('Rendimiento');
                const cargarForm = document.getElementById('enviar_form');
                cargarForm.onclick = () => { 
                    const inversion = new Invest(investName, investTag, investAmount.value, investRate.value);
                    const inversionCargada = JSON.parse(localStorage.getItem(dni));
                    inversionCargada == null ? (
                        localStorage.setItem(dni, JSON.stringify([inversion])),
                        mensajeCargar(formInver, dni)
                    ) : (
                        inversionCargada.push(inversion),
                        localStorage.setItem(dni, JSON.stringify(inversionCargada)),
                        mensajeCargar(formInver, dni)
                    )
                } 
            }
        };

    })
}

// Pantalla despues de la carga de una inversion
function mensajeCargar(form, dni) {
    Swal.fire({
        title: 'Cargaste correctamente tu inversión',
        imageUrl: './Images/pig.jpg',
        icon: 'success',
        timer: 2000
    })
    form.innerHTML = "";
    showInvest(dni);
}

 // Mostrar cartera de inversion 
function showInvest (dni) { 
    const mostrarCartera = document.getElementById('content');
    mostrarCartera.innerHTML = "";
    const listaInversiones = JSON.parse(localStorage.getItem(dni));
    if (listaInversiones != null) {
        const lista = document.createElement('div');
        lista.classList.add('container-fluid');
        lista.classList.add('row');
        lista.classList.add('row-cols-1');
        lista.classList.add('row-cols-md-4');
        lista.classList.add('g-4');
        mostrarCartera.appendChild(lista);
        for (let inversion of listaInversiones){
                fetch ('https://api.coinpaprika.com/v1/tickers')
                .then((respuesta) => respuesta.json())
                .then ((tickers) => {
                const busqueda = tickers.find((ele) => ele.symbol == inversion.investTag);
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
                                <p class="card-text"> Precio USD: ${busqueda.quotes.USD.price.toFixed(2)}</p>
                                </div>
                                <div class="card-footer">
                                <small class="text-muted">Saldo proyectado en 1 año: proximamente</small>
                                </div>
                `
                lista.appendChild(item);
            });
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
// Consultar Cotizaciones de todas las cryptos
function cotizaciones () {
    const listado = document.getElementById('login');
    const contenido = document.getElementById('content');
    contenido.innerHTML = '';
    listado.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.classList.add('tituloCotizaciones')
    titulo.innerText = `Cotización de las criptos expresados en USD`;
    listado.appendChild(titulo);
    fetch ('https://api.coinpaprika.com/v1/tickers')
    .then((respuesta) => respuesta.json())
    .then((tickers) => {
        tickers.forEach((ticker) => {
            const bloqueCoin = document.createElement('div')
            bloqueCoin.classList.add('bloqueCoin');
            coin = document.createElement('p');
            coin.classList.add('coin');
            coin.innerHTML= `${ticker.name}`;
            const price = document.createElement('p');
            price.classList.add('price');
            price.innerHTML= `USD ${ticker.quotes.USD.price.toFixed(2)}`;
            bloqueCoin.appendChild(coin);
            bloqueCoin.appendChild(price);
            listado.appendChild(bloqueCoin);
        });
    });
}    
