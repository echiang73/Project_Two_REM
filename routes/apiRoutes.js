var db = require("../models");

module.exports = function(app) {
  // Get all exercises
  app.get("/api/exercises", function(req, res) {
    db.Exercise_template.findAll({}).then(function(dbExercises) {
      res.json(dbExercises);
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

  // Create a new exercise routine by workout type
  app.post("/api/exercises/completedworkout", function(req, res) {
    db.User_history.create( // Changed to User History database!
      exerciseObject1 // Can this object be passed through? What about multiple objects?
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