var Like = require('../models/like.models');

exports.create = (req, res) => {
 
 // Create a like
 const like = new Like({
     likeId: req.body.likeId,
     likeDate: req.body.likeDate,
     seen: req.body.seen,
     
   });
   like
   .save(like)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the Like."
     });
   });
 };

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    Like.find(function(err, like){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving like."});
        } else {
            res.send(like);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    Like.findById(req.params.likeId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve like with id " + req.params.likeId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
    Like.findById(req.params.likeId, function(err, like) {
        if(err) {
            res.status(500).send({message: "Could not find a like with id " + req.params.likeId});
        }

       like.Like_id = req.body.Like_id;
       like.Creation_date = req.body.Creation_date;
       like.seen = req.body.seen;


       like.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not updatelike with id " + req.params.likeId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    
   Like.remove({_id: req.params.likeId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete like with id " + req.params.id});
        } else {
            res.send({message: "Like deleted successfully!"})
        }
    });
};

