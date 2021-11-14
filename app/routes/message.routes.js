module.exports = function(app) {

    var messages = require('../controllers/message.controllers.js');

    // Create a new message
    app.post('/messages',messages.create);
  
    // Retrieve allmessage
    app.get('/messages',messages.findAll);

    // Retrieve a single message with messageId
    app.get('/messages/:messageId',messages.findOne);


    // Update a message with messageId
    app.put('/messages/:messageId',messages.update);

    // Delete a message with messageId
    app.delete('/messages/:messageId',messages.delete);
}