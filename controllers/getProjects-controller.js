const getProjectsService = require("../services/getProjects-service");

module.exports = async function (req, res) {
  try {
    const projects = await getProjectsService();
    res.status(200).send(projects);
  } catch (error) {
    res.status(401).send({ error: error });
  }
};
