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
                       <div class = "formularios">
                            <div class = "form_login">
                                <label for = "name">Nombre</label>
                                <input type = "text" id = "name" name = "userName" placeholder = "Tu nombre" required>
                                <label for = "userDni">DNI</label>
                                <input type ="number" id ="dni" userDni = "dni" placeholder = "12345678" required>
                                <input type = "button" id = "enviar_form" class="btn btn-success" value="Login">
                            </div>
                       </div>
                       <section class = "wrapper">
                            <span class="texto">No sos usuario?</span>
                            <button type = "submit" id = "new-user" class = "btn btn-primary">Registrate</button>
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
    contenido.innerHTML = `<h3 class ="newUser__titulo">Ingresa tus datos en el siguiente formulario</h3>
                           <div class = "formularios">
                                <form id = "form_usuario">
                                    <label for = "name">Nombre</label>
                                    <input type = "text" id = "name" name = "userName" placeholder = "Juan" required>
                                    <label for = "surName">Apellido</label>
                                    <input type = "text" id = "surName" surName = "userSurame" placeholder = "Perez" required>
                                    <label for = "userDni">DNI</label>
                                    <input type ="number" id ="dni" userDni = "dni" placeholder = "12345698" required>
                                    <input type = "button" id="enviar_form" class = "btn btn-primary" value ="Enviar">
                                </form>
                           </div>`
    let userName = document.getElementById('name');
    const userSurname = document.getElementById('surName');
    const userDni = document.getElementById('dni');
    const enviar = document.getElementById('enviar_form');
    enviar.onclick = () => {
        if (userName.value =="" || userName.value == null || userSurname.value =="" || userSurname.value == null || userDni.value =="" || userDni.value == 0) {
            Swal.fire({
                title: 'Debes completar todos los campos requeridos',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        } else {
            users.push(new User(userName.value, userSurname.value, userDni.value));
            localStorage.setItem('listaUsuarios', JSON.stringify(users));  
            contenido.innerHTML="";
            const parrafo = document.createElement('p');
            parrafo.classList.add('mensaje_usuario_cargado');
            parrafo.classList.add('animate__animated');
            parrafo.classList.add('animate__backInLeft');
            parrafo.innerText = `Usuario cargado correctamente!!`;
            contenido.append(parrafo);
        }
    }
}

// Contenido del Home
function home() {
    const home = document.getElementById('login');
    const content = document.getElementById('content');
    content.innerHTML = "";
    home.innerHTML = "";
    home.innerHTML = `
    <section class = "home">
    <h1 class = "home__h1">Bienvenidos a CyberCat - Tus ganancias Cryptos en un solo lugar</h1>
    <div class ="home__div">
        <div class="card mb-3" style="max-width: 40%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./Images/cat1.png" class="img-fluid rounded-start" alt="gato contado plata">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">CONTROL DE TUS INVERSIONES</h5>
                        <p class="card-text-home">En un solo lugar vas a poder ver tus Critos y conocer el valor de tu cartera actualizado al instante.</p>
                        <p class="card-text-home">Ingresa o registratre para comenzar!!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mb-3" style="max-width: 40%;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="./Images/cat2.png" class="img-fluid rounded-start" alt="gato calculando ganacias">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">VALOR ACTUALIZADO</h5>
                        <p class="card-text-home">Consultá la cotización del mercado Cripto en tiempo real y tomá las mejores decisiones.</p>
                        <p class="card-text-home">Visitá nuestra sección de cotizaciones</p>
                    </div>
                </div>
            </div>
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
    const imagenLogin = document.getElementById('content');
    contenido.innerHTML = "";
    contenido.innerHTML = `<p class = "homeUser__h3">Bienvenido <spam class="nombreLogin">${nombre}</spam>!!</p>
                            <div class="navbar-nav-user">
                                <a class="nav_link_user" id= "addInvest"  href="#">Agregar Inversión</a>
                                <a class="nav_link_user" id = "consInvest" href="#">Consutlar Cartera</a>
                                <a class="nav_link_user" id = "showBalance" href="#">Balance</a>
                                <a class="nav_link_user" id = "delInvest" href="#">Borrar Inversión</a>
                            </div>
    `
    imagenLogin.innerHTML = "";
    imagenLogin.innerHTML = `
                    <img class ="homeUser__img" src = "./Images/catcyberpunk4.png" alt = "toro en grafico de mercado">
                    `
    
    const addInvest = document.getElementById('addInvest');
    addInvest.onclick = () => {
        agregarInversion(dni ,nombre);
    }     
    const consInvest = document.getElementById('consInvest');
    consInvest.onclick = () => {
        showInvest(dni, nombre);
    }
    const showBalance = document.getElementById('showBalance');
    showBalance.onclick = () => {
        pedirSaldo(dni);
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
    title.classList.add('tituloAgregarInversion');
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
        cryptoSeleccionada.classList.add('btn');
        cryptoSeleccionada.classList.add('btn-secondary');
        cryptoSeleccionada.innerText = `Seleccionar`;
        formInver.appendChild(cryptoSeleccionada);
        const wrapper_agregarInv = document.createElement('div');
        formInver.appendChild(wrapper_agregarInv);
        cryptoSeleccionada.onclick = () => { 
            const inversionesCargadas = JSON.parse(localStorage.getItem(dni)) || [];
            investTag = seleccionarTicker.value;
            const buscar = inversionesCargadas.find((ele) => ele.investTag == investTag);
            if (buscar) {
                Swal.fire({
                    icon: 'error',
                    width: 400,
                    title: 'Esta inversión ya existe en tu cartea',
                  })
            } else {
                wrapper_agregarInv.innerHTML = "";
                const tag = document.createElement('p');
                tag.classList.add('tag');
                tag.innerText = `TICKER: ${investTag}`;
                wrapper_agregarInv.appendChild(tag);
                const tagName = tickers.find((ele) => ele.symbol === investTag);
                investName = tagName.name;
                const nombreCrypto = document.createElement('p');
                nombreCrypto.classList.add('nombreCrypto');
                nombreCrypto.innerText = `NOMBRE: ${investName}`;
                wrapper_agregarInv.appendChild(nombreCrypto);
                const divisor = document.createElement('div');
                divisor.classList.add('divisor');
                divisor.innerHTML = `
                                    <form class = "form_agregarInv">
                                        <label for = "Cantidad">Cantidad</label>
                                        <input type ="number" id ="Cantidad" Cantidad = "Cantidad" required>
                                        <label for = "Rendimiento">Rendimiento Anual</label>
                                        <input type ="number" id ="Rendimiento" Rendimiento = "Rendimiento" required>
                                        <input type = "button" id="enviar_form" class = "btn btn-success" value ="Cargar">
                                    </form>
                    ` 
                wrapper_agregarInv.appendChild(divisor);
                investAmount =document.getElementById('Cantidad');
                investRate = document.getElementById('Rendimiento');
                const cargarForm = document.getElementById('enviar_form');
                cargarForm.onclick = () => { 
                    if (investAmount.value == null || investRate.value == null || investAmount.value == 0 || investRate.value == 0) {
                        Swal.fire({
                            title: 'La cantidad o el rendimiento no pueden ser Cero o estar vacios',
                            showClass: {
                                popup: 'animate__animated animate__fadeInDown'
                            },
                            hideClass: {
                                popup: 'animate__animated animate__fadeOutUp'
                            }
                        })
                    } else {
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
            
                };
            }
        }

    })
}

// Pantalla despues de la carga de una inversion
function mensajeCargar(form, dni) {
    Swal.fire({
        title: 'Cargaste correctamente tu inversión',
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
                                        <p class="card-text"> Valor en USD: ${(Number(busqueda.quotes.USD.price.toFixed(2))*Number(inversion.investAmount)).toFixed(2)}</p>
                                    </div>
                                    <div class="card-footer">
                                        <small class="text-muted">Saldo proyectado en 1 año: ${interesProyectado(Number(inversion.investAmount), Number(inversion.investRate))} ${inversion.investTag}</small>
                                    </div>
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
    if (cartera == null) {
        Swal.fire({
            icon: 'error',
            width: 400,
            title: 'No tienes inversiones para eliminar',
          })
    } else {
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
            lista.classList.add('container-fluid');
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
}
// Consultar Cotizaciones de todas las cryptos
function cotizaciones () {
    const listado = document.getElementById('login');
    const contenido = document.getElementById('content');
    contenido.innerHTML = '';
    listado.innerHTML = '';
    const titulo = document.createElement('h2');
    titulo.classList.add('tituloCotizaciones')
    titulo.innerText = `Cotización de las  principales criptos `;
    listado.appendChild(titulo);
    const bloqueCoins = document.createElement('div');
    bloqueCoins.classList.add('container-fluid');
    bloqueCoins.classList.add('row');
    bloqueCoins.classList.add('row-cols-1');
    bloqueCoins.classList.add('row-cols-md-6');
    bloqueCoins.classList.add('g-4');
    listado.appendChild(bloqueCoins);
    fetch ('https://api.coinpaprika.com/v1/tickers')
    .then((respuesta) => respuesta.json())
    .then((tickers) => {
        tickers.forEach((ticker) => {
            const coin = document.createElement('div');
            coin.classList.add('col');
            coin.innerHTML = `
                        <div class="card">
                            <img src="./Images/catcyberpunk3.png" class="card-img-top" alt="monedas">
                            <div class="card-body">
                                <h5 class="card-title">${ticker.name}</h5>
                                <p class="card-text"> Ticker: ${ticker.symbol}</p>
                                <p class="card-text"> Precio USD: ${ticker.quotes.USD.price.toFixed(2)}</p>
                            </div>
                        </div>
                                `
            bloqueCoins.appendChild(coin);
        });
    });
}    

// Calcular el interes proyectado
function interesProyectado(cantidad,interes) {
    const interesganado = cantidad + (cantidad*interes / 100);
    return interesganado;
}

// Pedir saldo total de la cartera

function pedirSaldo(dni)  {
    let saldoCartera = [];
    let saldo = 0;
    const contenido = document.getElementById('content');
    contenido.innerHTML = '';
    const inversiones = JSON.parse(localStorage.getItem(dni));
    if (inversiones != null) {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then((respuesta) => respuesta.json())
        .then ((tickers) => {
                let i = 0;
                for (let inversion of inversiones) {  
                const busqueda = tickers.find((ele) => ele.symbol == inversion.investTag);
                saldoCartera[i] = (Number(inversion.investAmount)*Number(busqueda.quotes.USD.price)); 
                i++; 
            }   
        })
        .then(() => {
            for(const ele of saldoCartera) {
                saldo = Number(ele)  + saldo;
            }
            const item = document.createElement('div');
            item.classList.add('mostrarBalance');
            item.classList.add('container-fluid');
            item.classList.add('row');
            item.classList.add('row-cols-1');
            item.classList.add('row-cols-md-4');
            item.classList.add('g-4');
            item.innerHTML = `
                                <div class="card">
                                <img src="./Images/catcyberpunk2.png" class="card-img-top" alt="gato calculando">
                                <div class="card-body">
                                <h5 class="card-title">Saldo de tu Cartera</h5>
                                <p class="card-text"> El total de tu inversión es de USD ${saldo.toFixed(2)}</p>
                                
                            `
            contenido.appendChild(item);        
        })
    }    
}
