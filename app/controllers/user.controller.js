var User = require('../models/user.model.js');

exports.create = (req, res) => {
 
 // Create a user
 const user = new User({
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     password: req.body.password,
     email: req.body.email,
     bio: req.body.bio,
     age: req.body.age,
     location: req.body.location
   });
   user
   .save(user)
   .then(data => {
     res.send(data);
   })
   .catch(err => {
     res.status(500).send({
       message:
         err.message || "Some error occurred while creating the User."
     });
   });
 };

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
    User.find(function(err, users){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving users."});
        } else {
            res.send(users);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve user with id " + req.params.userId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.password = req.body.password;
        user.email = req.body.email;
        user.bio = req.body.bio;
        user.location = req.body.location;
        user.age = req.body.age;


        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.userId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete user with id " + req.params.id});
        } else {
            res.send({message: "User deleted successfully!"})
        }
    });
};

