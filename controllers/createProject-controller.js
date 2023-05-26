const createProjectService = require("../services/createProject-service");

module.exports = async function (req, res) {
  try {
    const project = req.body;
    const createdProject = await createProjectService(project);
    res.status(201).send(createdProject);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
