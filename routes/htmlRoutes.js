var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Exercise_template.findAll({}).then(function(dbExercises) {
      res.render("index", {
        // msg: "Welcome!",
        exercises: dbExercises
      });
      console.log(dbExercises);
    });
  });

  // // Load UPPER BODY page
  app.get("/upper_body", function(req, res) {
    db.Exercise_template.findAll({
      where: {workout_type: "Upper Body"}
    }).then(function(dbExercises) {
      res.render("upperbody", {
        // msg: "Welcome!",
        exercises: dbExercises
      });
      console.log(dbExercises);
    });
  });

  // Load UPPER BODY page
  // app.get("/", function(req, res) {
  //   db.Exercise_template.findAll({
  //     where: {workout_type: "Upper Body"}
  //   }).then(function(dbExercises) {
  //     // res.sendFile(path.join(__dirname, "../public/view.html"));
  //     res.render("upperbody", {
  //       // msg: "Welcome!",
  //       exercises: dbExercises
  //     });
  //     console.log(dbExercises);
  //   });
  // });

  // Load exercise page and pass in an exercise by id
  app.get("/exercise/:id", function(req, res) {
    db.Exercise_template.findOne({ where: { id: req.params.id } }).then(function(dbExercise) {
      res.render("exercise", {
        exercise: dbExercise
      });
    });
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });


};

