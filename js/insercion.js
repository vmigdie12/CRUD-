function validateLoginForm() {
    // Obtener el valor del campo de usuario
    var username = document.getElementById("usernameInsercion").value;
    // Seleccionar el elemento donde se mostrará el mensaje de error
    var usernameError = document.getElementById("usernameError");
    
    var email = document.getElementById("correoinsercion").value;
    var emailError = document.getElementById("emailError");

    var contra = document.getElementById("passwordInsercion").value;
    var contraError = document.getElementById("passwordError");

    var nombre = document.getElementById("nameinsercion").value;
    var nombreError = document.getElementById("nameError");

    var ape = document.getElementById("apeinsercion").value;
    var apeError = document.getElementById("apeError");

    var date = document.getElementById("fechainsercion").value;
    var dateError = document.getElementById("fechaError");

    var age = document.getElementById("ageinsercion").value;
    var ageError = document.getElementById("ageError");



    var validate = true;
    
    // Verificar si el usuario tiene entre 8 y 12 caracteres
    if (username.length < 8 || username.length > 12) {
        // Mostrar el mensaje de error
        usernameError.style.display = "block";
        // Evitar que el formulario se envíe
        validate = false;
    } else {
        // Ocultar el mensaje de error si se cumplen los requisitos
        usernameError.style.display = "none";
    }
    
    var expemail = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if (!email.match(expemail)){
        emailError.style.display = "block";
        validate = false;
    } else {
        emailError.style.display = "none";
    }

    var expcontra = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$');
    if (!contra.match(expcontra)){
        contraError.style.display = "block";
        validate = false;
    } else {
        contraError.style.display = "none";
    }

    if (nombre.length < 2 ) {
        nombreError.style.display = "block";
        validate = false;
    } else {
        nombreError.style.display = "none";
    }

    if (ape.length < 2 ) {
        apeError.style.display = "block";
        validate = false;
    } else {
        apeError.style.display = "none";
    }

    if (date == "") {
        dateError.style.display = "block";
        validate = false;
    } else {
        dateError.style.display = "none";
    }

    if (age < 1 ) {
        ageError.style.display = "block";
        validate = false;
    } else {
        ageError.style.display = "none";
    }
    
    return validate;
}
