   var socket = io();
   socket.on('connect', function() {
       console.log('Connected to server');


       socket.emit('createMessage', {
           from: 'Yan',
           text: 'That works for me'
       })
   });
   socket.on('newMessage', function(message) {
       console.log(`You got a new message from ${message.from}:${message.text}`);
   })
   socket.on('disconnect', function() {
       console.log('Disconnected from server');
   });

   socket.on('newEmail', function(email) {
       console.log('New email', email);
   });