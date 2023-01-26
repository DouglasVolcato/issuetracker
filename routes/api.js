"use strict";
const createProjectController = require("../controllers/createProject-controller");
const deleteProjectController = require("../controllers/deleteProject-controller");
const updateProjectController = require("../controllers/updateProject-controller");

module.exports = function (app) {
  app
    .route("/api/issues/:project")
    .get(createProjectController(req, res))
    .post(createProjectController(req, res))
    .put(updateProjectController(req, res))
    .delete(deleteProjectController(req, res));
};
