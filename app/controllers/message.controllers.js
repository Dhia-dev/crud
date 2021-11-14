var Message = require('../models/message.models');

exports.create = (req, res) => {
 
 // Create a message
 const message = new Message({
     seen: req.body.seen,
     senderId: req.body.senderId,
     receiverID: req.body.receiverID,
     sentDate: req.body.sentDate,
     seenDate: req.body.seenDate,
     
   });
   message
   .save(message)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Message."
     });
   });
 };

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Message.find(function(err, messages){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving messages."});
        } else {
            res.send(messages);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Message.findById(req.params.MessageId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve message with id " + req.params.MessageId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
    Message.findById(req.params.messageId, function(err, message) {
        if(err) {
            res.status(500).send({message: "Could not find a messages with id " + req.params.messageId});
        }

        message.seen = req.body.seen;
        message.senderId = req.body.senderId;
        message.receiverID = req.body.receiverID;
        message.sentDate = req.body.sentDate;
        message.seenDate = req.body.seenDate;
        


        message.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update messages with id " + req.params.messagesId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    
    Message.remove({_id: req.params.messageId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete message with id " + req.params.id});
        } else {
            res.send({message: "message deleted successfully!"})
        }
    });
};
