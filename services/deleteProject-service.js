const deleteProjectRepository = require("../infra/repositories/project/deleteProject-repository");

module.exports = async function (projectId) {
  const deletedProject = await deleteProjectRepository(projectId);
  if (deletedProject._id) {
    return deletedProject;
  } else {
    throw new Error("Project not found.");
  }
};
