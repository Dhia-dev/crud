var Payement = require('../models/payement.models');

exports.create = (req, res) => {
 
 // Create a payement
 const payement = new Payement({
     description: req.body.description,
     payementId: req.body.payementId,
     amount: req.body.amount,
     payement_date: req.body.payement_date,
     userId: req.body.userId,
     
   });
   payement
   .save(payement)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       payement:
         err.payement || "Some error occurred while creating the Payement."
     });
   });
 };

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    payement.find(function(err, payements){
        if(err) {
            res.status(500).send({payement: "Some error occurred while retrieving payements."});
        } else {
            res.send(payements);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Payement.findById(req.params.PayementId, function(err, data) {
        if(err) {
            res.status(500).send({payement: "Could not retrieve payement with id " + req.params.PayementId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
    Payement.findById(req.params.payementId, function(err, payements) {
        if(err) {
            res.status(500).send({payement: "Could not find a payements with id " + req.params.payementId});
        }

        payement.description= req.body.description;
        payement.payementId = req.body.payementId;
        payement.amount = req.body.amount;
        payement.payement_date = req.body.payement_date;
        payement.userId = req.body.userId;
        


        payement.save(function(err, data){
            if(err) {
                res.status(500).send({payement: "Could not update payement with id " + req.params.payementId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    
    Payement.remove({_id: req.params.payementId}, function(err, data) {
        if(err) {
            res.status(500).send({payement: "Could not delete payement with id " + req.params.id});
        } else {
            res.send({payement: "payement deleted successfully!"})
        }
    });
};