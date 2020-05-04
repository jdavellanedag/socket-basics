let socket = io();

// On escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Conexión perdida con el servidor');
});

// Emit enviar información
socket.emit('enviarMensaje', {
    usuario: 'Julian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server:', resp);
});

socket.on('enviarMensaje', function(data) {
    console.log('Servidor:', data);
});