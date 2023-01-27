const getProjectByIdRepository = require("../infra/repositories/project/getProjectById-repository");

module.exports = async function (projectId) {
  return await getProjectByIdRepository(projectId);
};
