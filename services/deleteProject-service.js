const deleteProjectRepository = require("../infra/repositories/project/deleteProject-repository");

module.exports = async function (projectId) {
  return await deleteProjectRepository(projectId);
};
