// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/history", function(req, res) {
    var query = {};
    if (req.query.author_id) {
      query.ExerciseId = req.query.author_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.History.findAll({
      where: query,
      include: [db.Exercise]
    }).then(function(dbHistory) {
      res.json(dbHistory);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/history/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.History.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Exercise]
    }).then(function(dbHistory) {
      res.json(dbHistory);
    });
  });

 
};
