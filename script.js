const loginForm =
document.getElementById("loginForm");

const registerForm =
document.getElementById("registerForm");

const recoverForm =
document.getElementById("recoverForm");

/* MOSTRAR REGISTRO */

document
.getElementById("mostrarRegistro")
.addEventListener("click",(e)=>{

    e.preventDefault();

    loginForm.classList.add("oculto");
    registerForm.classList.remove("oculto");

});

/* VOLVER LOGIN */

document
.getElementById("volverLogin")
.addEventListener("click",(e)=>{

    e.preventDefault();

    registerForm.classList.add("oculto");
    loginForm.classList.remove("oculto");

});

/* RECUPERAR */

document
.getElementById("mostrarRecuperar")
.addEventListener("click",(e)=>{

    e.preventDefault();

    loginForm.classList.add("oculto");
    recoverForm.classList.remove("oculto");

});

/* VOLVER LOGIN 2 */

document
.getElementById("volverLogin2")
.addEventListener("click",(e)=>{

    e.preventDefault();

    recoverForm.classList.add("oculto");
    loginForm.classList.remove("oculto");

});

/* LOGIN */

loginForm.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const matricula =
    document.getElementById("usuario").value;

    const password =
    document.getElementById("password").value;

    try{

        const respuesta = await fetch(

            "http://localhost:3000/login",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    matricula,
                    password

                })

            }

        );

        const datos = await respuesta.json();

        if(datos.success){

            localStorage.setItem(

                "alumno",

                JSON.stringify(datos.alumno)

            );

            window.location.href = "dashboard.html";

        }else{

            alert("Matrícula o contraseña incorrecta");

        }

    }catch(error){

        console.log(error);

        alert("Error del servidor");

    }

});

/* REGISTRO */

registerForm.addEventListener("submit", async(e)=>{

    e.preventDefault();

    const nombre =
    document.getElementById("nombre").value;

    const matricula =
    document.getElementById("matriculaRegistro").value;

    const correo =
    document.getElementById("correo").value;

    const semestre =
    document.getElementById("semestre").value;

    const salon =
    document.getElementById("salon").value;

    const modalidad =
    document.getElementById("modalidad").value;

    const password =
    document.getElementById("passwordRegistro").value;

    try{

        const respuesta = await fetch(

            "http://localhost:3000/registro",

            {

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    nombre,
                    matricula,
                    correo,
                    semestre,
                    salon,
                    modalidad,
                    password

                })

            }

        );

        const datos = await respuesta.json();

        if(datos.success){

            alert("Cuenta creada correctamente");

            registerForm.classList.add("oculto");
            loginForm.classList.remove("oculto");

        }else{

            alert("Error al crear cuenta");

        }

    }catch(error){

        console.log(error);

        alert("Error del servidor");

    }

});

/* RECUPERAR */

recoverForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Correo de recuperación enviado");

});