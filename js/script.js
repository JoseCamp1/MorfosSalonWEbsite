//alerta
document.addEventListener('DOMContentLoaded', function() {
    var alerta = document.getElementById('alerta');
    alerta.style.display = 'none';// oculta el elemento desde que se carga la pagina
});

function mostrarAlerta() {
    var alerta = document.getElementById('alerta');
    alerta.style.display = 'block'; // muestra el elemento

    setTimeout(function() {
      alerta.style.display = 'none'; // oculta el elemento después de 2 segundos
    }, 2000);
}

// Agrega un evento de escucha al formulario para que cuando se envíe, se ejecute la función handleSubmit.
form.addEventListener('submit',handleSubmit)

// Define la función asíncrona handleSubmit.
async function handleSubmit(){
    
    // Previene que se realice la acción por defecto del formulario (enviar los datos a una nueva página).
    event.preventDefault()

    // Crea un nuevo objeto FormData con el formulario.
    const form = new FormData(this)

    // Realiza una petición asíncrona a la dirección especificada en el atributo
    // "action" del formulario. La petición utiliza el método especificado en el
    // atributo "method" del formulario y envía los datos del formulario
    // utilizando el objeto FormData creado anteriormente. También incluye un
    // encabezado que especifica que se espera una respuesta en formato JSON.
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    // Si la respuesta de la petición es exitosa (código 200-299), resetea el formulario y muestra un mensaje de agradecimiento.
    if(response.ok){
        this.reset()
        mostrarAlerta()
    }
}