require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8000; // changed from 3000 to 8000 since fitbit needs port 3000 for callback

// Fitbit
// var http = require('http');
// var path = require('path');
// var dotenv = require('dotenv');
// // var keys = require("./keys.js");
// var CLIENT_ID = "22DPR8";
// var CLIENT_SECRET = "7176f88122bd14ce86f44b1a95d52681";
// var SESSION_SECRET = "7176f88122bd14ce86f44b1a95d52681";
// var CALLBACK_URL = "http://localhost:3000/callback";

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

// Fitbit

// router.use(express.static(path.resolve(__dirname, 'client')));

// // initialize the Fitbit API client
// var FitbitApiClient = require("fitbit-node");
// var client = new FitbitApiClient(CLIENT_ID, CLIENT_SECRET);

// // Use the session middleware
// router.use(session({ secret: SESSION_SECRET, cookie: { maxAge: 60000 }}));

// // redirect the user to the Fitbit authorization page
// router.get("/authorize", function (req, res) {
//     // request access to the user's activity, heartrate, location, nutrion, profile, settings, sleep, social, and weight scopes
//     res.redirect(client.getAuthorizeUrl('activity heartrate location nutrition profile settings sleep social weight',CALLBACK_URL));
// });

// // handle the callback from the Fitbit authorization flow
// router.get("/callback", function (req, res) {
//     // exchange the authorization code we just received for an access token
//     client.getAccessToken(req.query.code, CALLBACK_URL).then(function (result) {
//         // use the access token to fetch the user's profile information
//         req.session.authorized = true;
//         req.session.access_token = result.access_token;
//         req.session.save();
//         res.redirect("/");
//     }).catch(function (error) {
//         res.send(error);
//     });
// });

// router.get("/logout", function(req, res) {
//     req.session.authorized = false;
//     req.session.access_token = null;
//     req.session.save();
//     res.redirect("/");  
// })

// router.get('/profile.json', function(req, res) {
//     if (req.session.authorized) {
//         client.get("/profile.json", req.session.access_token).then(function (results) {
//             res.json(results[0]);
//         });
//     } else {
//         res.status(403);
//         res.json({ errors: [{ message: 'not authorized' }]});
//     }
// });

// // launch the server
// router.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
//   console.log('server listening');
// });