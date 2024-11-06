<?php
require_once 'dbConnect.php';  // Conexión a la base de datos

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $status = 1;

    $query = "INSERT INTO customers (first_name, last_name, email, password, status, created, modified) VALUES (?, ?, ?, ?, ?, NOW(), NOW())";
    $stmt = $db->prepare($query);
    $stmt->bind_param("ssssi", $first_name, $last_name, $email, $password, $status);
    if ($stmt->execute()) {
        echo "Registro exitoso.";
        header("Location: login.php");
        exit();
    } else {
        echo "Error en el registro.";
    }
}
?>

<form method="POST" action="register.php">
    <input type="text" name="first_name" placeholder="Nombre" required>
    <input type="text" name="last_name" placeholder="Apellido" required>
    <input type="email" name="email" placeholder="Correo electrónico" required>
    <input type="password" name="password" placeholder="Contraseña" required>
    <button type="submit">Registrarse</button>
</form>