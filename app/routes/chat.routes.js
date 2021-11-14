module.exports = function(app) {

    var chat = require('../controllers/chat.controllers.js');

    // Create a new chat
    app.post('/chat',chat.create);
  
    // Retrieve allchat
    app.get('/chat',chat.findAll);

    // Retrieve a single chat with chatId
    app.get('/chat/:chatId',chat.findOne);


    // Update a chat with chatId
    app.put('/chat/:chatId',chat.update);

    // Delete a chat with chatId
    app.delete('/chat/:messageId',chat.delete);
}