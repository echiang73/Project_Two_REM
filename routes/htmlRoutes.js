var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Exercise_template.findAll({}).then(function(dbExercises) {
      res.render("index", {
        msg: "Welcome!",
        exercises: dbExercises
      });
    });
  });

  // Load exercise page and pass in an exercise by id
  app.get("/exercise/:id", function(req, res) {
    db.Exercise_template.findOne({ where: { id: req.params.id } }).then(function(dbExercise) {
      res.render("exercise", {
        exercise: dbExercise
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
