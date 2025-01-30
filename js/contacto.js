const enviarFormulario = (e) => {
  e.preventDefault()
  
  templateParams = {
  nombre: this.nombre.value,
  apellido: this.apellido.value,
  email: this.email.value,
  comentario: this.comentario.value
  }
  
  emailjs.send(
    'contact_service',
    'contact_form',
    templateParams,
    '3zYJN5TVaxo0dohPg'
  ).then(() => {
    console.log('FORMULARIO ENVIADO')
  }, (err) => {
    console.log('Envio fallido', err)
  })
}


window.onload = function () {
  const myForm = document.getElementById("myForm")
  myForm.addEventListener("submit", enviarFormulario)

}