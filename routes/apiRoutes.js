var db = require("../models");

module.exports = function(app) {
  // Get all exercises

  app.get("/api/exercises", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Exercise_template.findAll({
      include: [db.User_history]
    }).then(function(dbExercise_template) {
      res.json(dbExercise_template);
    });
  });

  // Get all exercises based on workout type!
  // app.get("/api/exercises/:workout_type", function(req, res) {
  //   db.Exercise_template.findAll({
  //     where: {workout_type: req.params.workout_type}
  //   }).then(function(dbExercises) {
  //     res.json(dbExercises);
  //   });
  // });
  app.get("/api/exercises/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Exercise_template.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User_history]
    }).then(function(dbExercise_template) {
      res.json(dbExercise_template);
    });
  });


  // GET route for getting all of the posts
  app.get("/api/history", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.ExerciseId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User_history.findAll({
      where: query,
      include: [db.Exercise_template]
    }).then(function(dbUser_history) {
      res.json(dbUser_history);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/history/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.User_history.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Exercise_template]
    }).then(function(dbUser_history) {
      res.json(dbUser_history);
    });
  });




  // Create a new exercise routine by workout type
  app.post("/api/exercises/completedworkout", function(req, res) {
    console.log(req.body);



    db.User_history.bulkCreate( // Changed to User History database!
      req.body
      ).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // Delete an exercise by id
  // app.delete("/api/exercises/:id", function(req, res) {
  //   db.Exercise_template.destroy({ where: { id: req.params.id } }).then(function(dbExercise) {
  //     res.json(dbExercise);
  //   });
  // });
};