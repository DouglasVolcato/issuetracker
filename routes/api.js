"use strict";
import createProjectController from "../controllers/createProject-controller";
import deleteProjectController from "../controllers/deleteProject-controller";
import updateProjectController from "../controllers/updateProject-controller";

export default function (app) {
  app
    .route("/api/issues/:project")
    .get(createProjectController(req, res))
    .post(createProjectController(req, res))
    .put(updateProjectController(req, res))
    .delete(deleteProjectController(req, res));
}
