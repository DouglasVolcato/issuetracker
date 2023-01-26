"use strict";
const createProjectController = require("../controllers/createProject-controller");
const deleteProjectController = require("../controllers/deleteProject-controller");
const updateProjectController = require("../controllers/updateProject-controller");

module.exports = function (app) {
  app
    .route("/api/issues/:project")
    .get((req, res) => createProjectController(req, res))
    .post((req, res) => createProjectController(req, res))
    .put((req, res) => updateProjectController(req, res))
    .delete((req, res) => deleteProjectController(req, res));
};
