const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a la aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*        if (message.usuario) {
                    callback({
                        resp: 'Todo salió bien'
                    });
                } else {
                    callback({
                        resp: 'Todo salio mal'
                    });
                } */
    });
});