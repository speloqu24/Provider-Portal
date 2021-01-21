// This will require the db from the index/models.js
const db = require("../models");
// const uploadHandler = require("../config/middleware/multer");

// Routes

module.exports = (app) => {
  // get ALL clients for handlebars page
  app.get("/api/clients", (req, res) => {
    // findAll THE clients that have been added to the database
    db.Clients.findAll({ include: [db.Providers] }).then((data) =>
      res.render("allClient", { Clients: JSON.parse(JSON.stringify(data)) })
    );
  });

  // get ALL providers for handlebars page
  app.get("/api/providers", (req, res) => {
    db.Providers.findAll({}).then((data) =>
      res.render("allProvider", { Providers: JSON.parse(JSON.stringify(data)) })
    );
  });

  //gets provider list for add client form
  app.get("/api/providerList", (req, res) => {
    db.Providers.findAll({}).then((data) => res.json(data));
  });

  app.get("/api/singleClient/:id", (req, res) => {
    let cliId = parseInt(req.params.id);
    db.Clients.findAll({
      where: { id: cliId },
      include: [db.Providers],
    }).then((client) => res.render("singleClient", { data: client }));
  });

  app.get("/api/singleProvider/:id", (req, res) => {
    let proId = parseInt(req.params.id);
    db.Providers.findAll({
      where: { id: proId },
    }).then((provider) => res.render("singleProvider", { data: provider }));
  });

  // app.post("/api/singleClient/:id", uploadHandler.any(), (req, res) => {
  //   db.documents.create(clientId, req.files).then((data) => res.status(200));
  // });

  // add clients form
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

  // add providers form
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
