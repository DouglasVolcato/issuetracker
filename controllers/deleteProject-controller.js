const deleteProjectService = require("../services/deleteProject-service");

module.exports = async function (req, res) {
  try {
    const projectId = req.body._id;
    const createdProject = await deleteProjectService(projectId);
    res.status(200).send(createdProject);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
