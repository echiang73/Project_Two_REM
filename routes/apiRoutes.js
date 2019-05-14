var db = require("../models");

module.exports = function(app) {
  // Get all exercises
  app.get("/api/exercises", function(req, res) {
    db.Exercise_template.findAll({}).then(function(dbExercises) {
      res.json(dbExercises);
    });
  });

  // Create a new exercise routine by workout type
  app.post("/api/exercises/:workout_type", function(req, res) {
    db.Exercise_template.create({
      exercise_name,
      exer_img_url,
      weight,
      repetitions,
      sets
    },{
       where: { workout_type: req.params.workout_type}
    }
      ).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // Delete an exercise by id
  app.delete("/api/exercises/:id", function(req, res) {
    db.Exercise_template.destroy({ where: { id: req.params.id } }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });
};