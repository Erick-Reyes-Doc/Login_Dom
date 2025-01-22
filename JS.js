document.getElementById('submitBtn').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const sexo = document.querySelector('input[name="sexo"]:checked');

    const mensaje = document.getElementById('mensaje');

    if (!nombre || !apellido || !correo || !telefono || !sexo) {
        mensaje.textContent = "Por favor, llena todos los campos del formulario.";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Formulario válido. ¡Se ha enviado correctamente!";
        mensaje.style.color = "green";


    }
});
