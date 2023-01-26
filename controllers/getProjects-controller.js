const getProjectsService = require("../services/getProjects-service");

module.exports = async function (req, res) {
  const projects = await getProjectsService();
  res.status(200).send(projects);
};
