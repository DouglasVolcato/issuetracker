const getProjectsRepository = require("../infra/repositories/project/getProjects-repository");

module.exports = async function () {
  return await await getProjectsRepository();
};
