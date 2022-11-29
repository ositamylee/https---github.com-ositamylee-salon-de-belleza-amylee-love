// declarar unas variables para los identificadores

const formcontact = document.querySelector("#formcotact");
const recepcion = document.querySelector("#recepcion");

// se debe capturar o "escuchar" el sumitpara el envio de correo

formcontact.addEventListener("submit", envioInfo);
// envioinf es una funcion, la cual va a capturar la informacion que estan en los elememtos del formulario; imput

function envioInf(event){
    // preparar el evento
    event.preventDefault();
    // para poder imprimir la info, se crea un objeto formData
    const envioFom = new FormData(this);
    // envio
    recepcion.setAttribute("href",`mailto
    ${envioForm.get("email")}?subject=nombre: 
    ${envioForm.get("nombre")} apellido: 
    ${envioForm.get("apellido")} email: 
    ${envioForm.get("email")} &body=
    ${envioForm.get("mensaje")}`);
    recepcion.click();


}
