// Función para registrar un nuevo usuario
function registrarUsuario(event) {
    event.preventDefault();
    
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Guardar usuario y contraseña en localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Mostrar mensaje de éxito
    document.getElementById("registro-mensaje").textContent = "Registro exitoso. Ahora puedes iniciar sesión.";
    
    // Redirigir al inicio de sesión después de un breve retraso
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
}

// Función para iniciar sesión
function iniciarSesion(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Obtener usuario y contraseña de localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Verificar si las credenciales coinciden
    if (username === storedUsername && password === storedPassword) {
        // Mostrar mensaje de éxito y redirigir
        document.getElementById("login-mensaje").textContent = "Inicio de sesión exitoso.";
        setTimeout(() => {
            window.location.href = "index.html"; // Redirige a la página principal o de usuario
        }, 2000);
    } else {
        // Mostrar mensaje de error
        document.getElementById("login-mensaje").textContent = "Nombre de usuario o contraseña incorrectos.";
        document.getElementById("login-mensaje").style.color = "red";
    }
}
