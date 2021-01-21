// CONNECTING TO THIS FILE EXPRESS

// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
require("dotenv").config();
//Requiring multer for file uploading
const multer = require("multer");
const upload = multer({ dest: "public/assets/uploads" });

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8085;
var db = require("./models");
var app = express();

const exphbs = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.use(express.static("public"));
// app.use(express.static("assets"));
app.set("view engine", "handlebars");

// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

// Set Handlebars
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/client-provider-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
