var Chat = require('../models/chat.models.js');

exports.create = (req, res) => {
 
 // Create a chat
 const chat = new Chat({
     Chat_id: req.body.Chat_id,
     Creation_date: req.body.Creation_date
     
   });
   chat
   .save(chat)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Chat."
     });
   });
 };

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Chat.find(function(err, chat){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving chat."});
        } else {
            res.send(chat);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Chat.findById(req.params.chatId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve chat with id " + req.params.chatId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
    Chat.findById(req.params.chatId, function(err, chat) {
        if(err) {
            res.status(500).send({message: "Could not find a chat with id " + req.params.chatId});
        }

        chat.Chat_id = req.body.Chat_id;
        chat.Creation_date = req.body.Creation_date;
        


        chat.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update chat with id " + req.params.chatId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    
    Chat.remove({_id: req.params.chatId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete chat with id " + req.params.id});
        } else {
            res.send({message: "Chat deleted successfully!"})
        }
    });
};

