const wildcard = require('socketio-wildcard');

module.exports = {
    init: () => {
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            next();
        });
        const io = require('socket.io').listen(server);
        io.use(wildcard());
        io.on('connection', function (socket) {
            socket.emit('connection');
            console.log((`☕Socket: An user connected.`).green);
            socket.on('*', (event) => {
                let name = event.data ? event.data[0] : '';
                let data = event.data ? (event.data[1] || {}) : {};
                let room = data.room;
                delete data.room;
                return room ? socket.to(room).emit(name, data) : socket.broadcast.emit(name, data);
            });
            socket.on('join', function (room) {
                socket.join(room);
            });
            socket.on('leave', function (room) {
                socket.leave(room);
            });
        });
    }
}