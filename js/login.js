function validateLoginForm() {
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    // Limpiar mensajes de error
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    // Validación del usuario
    if (username === "" || username.length < 8 || username.length > 12) {
        document.getElementById("usernameError").innerHTML = "El usuario debe tener entre 8 y 12 caracteres.";
    }

    // Validación de la contraseña
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,15}$/;
    if (password === "" || !passwordRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = "La contraseña debe tener entre 8 y 15 caracteres, incluir al menos una mayúscula, una minúscula y un dígito.";
    }

    // Si hay errores, no realizar más acciones
    if (document.getElementById("usernameError").innerHTML !== "" || document.getElementById("passwordError").innerHTML !== "") {
        return;
    }

    // Si la validación es exitosa, puedes enviar el formulario o realizar otras acciones
    alert("Login exitoso");
    // Aquí puedes agregar más acciones, como enviar el formulario o redirigir a otra página
}