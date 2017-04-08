var cp = require('child_process');
var io = require('socket.io').listen(8080);
var ss = require('socket.io-stream');
var path = require('path');
var fs = require('fs');

io.of('/user').on('connection', function(socket) {
    console.log('connection success');
  ss(socket).on('profile-image', function(stream, data) {
    console.log('filename: ' + data.name);
    var filename = data.name;
    console.log(filename);
    stream.pipe(fs.createWriteStream(filename));
    
    cp.exec('pm2 restart now_zhixu', function(err, stdout, stderr) {})
    console.log('restart ok')

  });
});

