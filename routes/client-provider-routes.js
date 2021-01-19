// This will require the db from the index/models.js
const db = require("../models");
const uploadHandler = require("../config/middleware/multer");

// Routes

module.exports = (app) => {
  // get ALL clients
  app.get("/clients", (req, res) => {
    // findAll THE clients that have been added to the database
    db.Clients.findAll({}).then((data) => res.json(data));
  });
  //.then(res.render('allClient'), {clients: data})

  // get ALL providers
  app.get("/api/providers", (req, res) => {
    db.Providers.findAll({}).then((data) => res.json(data));
  });
  //.then(res.render('allProvider'), {providers: data})

  //---------------------------------------------------
  //singeClient route by id
  app.get("/api/singleClient/:id", (req, res) => {
    db.Clients.findAll({
      where: { id: req.params.id },
    }).then((client) => res.render("singleClient", { client }));
  });
  //---------------------------------------------------

  //route for uploading documents TEMPLATE
  app.post("/api/singleClient/:id", uploadHandler.any(), (req, res) => {
    db.documents.create(clientId, req.files).then((data) => res.status(200));
  });

  // add clients
  app.post("/api/client", (req, res) => {
    db.Clients.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      insurance: req.body.insurance,
      ProviderId: req.body.ProviderId,
    }).then((data) => res.json(data));
  });

  // add providers
  app.post("/api/provider", (req, res) => {
    db.Providers.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      company: req.body.company,
      practice: req.body.practice,
    }).then((data) => res.json(data));
  });
};
