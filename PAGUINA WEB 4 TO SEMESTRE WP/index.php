<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $asunto = htmlspecialchars($_POST['asunto']);
    $descripcion = htmlspecialchars($_POST['descripcion']);
    
    // Configuración del correo
    $to = 'renepanchi@hotmail.com';  // Tu dirección de correo electrónico
    $subject = 'Nuevo Reclamo: ' . $asunto;
    $message = "Nombre: $nombre\n";
    $message .= "Correo Electrónico: $email\n";
    $message .= "Número de Teléfono: $telefono\n";
    $message .= "Asunto: $asunto\n";
    $message .= "Descripción:\n$descripcion\n";
    
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo "Reclamo enviado con éxito.";
    } else {
        echo "Error al enviar el reclamo.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
