const getProjectByIdService = require("../services/getProjectById-service");
const getProjectsService = require("../services/getProjects-service");

module.exports = async function (req, res) {
  try {
    if (req.params.project !== "apitest" && req.params.project) {
      const project = await getProjectByIdService(req.params.project);
      res.status(200).send(project);
    } else {
      const projects = await getProjectsService();
      res.status(200).send(projects);
    }
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
