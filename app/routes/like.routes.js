module.exports = function(app) {

    var like = require('../controllers/like.controllers.js');

    // Create a new like
    app.post('/like',like.create);
  
    // Retrieve alllike
    app.get('/like',like.findAll);

    // Retrieve a single like with likeId
    app.get('/like/:likeId',like.findOne);


    // Update a like with likeId
    app.put('/like/:likeId',like.update);

    // Delete a like with likeId
    app.delete('/like/:messageId',like.delete);
}