module.exports = function(app) {

    var payement = require('../controllers/payement.controller.js');

    // Create a new payement
    app.post('/payement',payement.create);
  
    // Retrieve allpayement
    app.get('/payement',payement.findAll);

    // Retrieve a single payement with payementId
    app.get('/payement/:payementId',payement.findOne);


    // Update a payement with payementId
    app.put('/payement/:payementId',payement.update);

    // Delete a payement with payementId
    app.delete('/payement/:payementId',payement.delete);
}