const createProjectService = require("../services/createProject-service");

module.exports = async function (req, res) {
  const project = req.body;
  const createdProject = await createProjectService(project);
  res.status(201).send(createdProject);
};
