// This will require the db from the index/models.js
const db = require("../models");

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
