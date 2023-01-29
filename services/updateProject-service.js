const ProjectEntity = require("../domain/entities/project-entity");
const getProjectByIdRepository = require("../infra/repositories/project/getProjectById-repository");
const updateProjectRepository = require("../infra/repositories/project/updateProject-repository");

module.exports = async function (projectData) {
  const foundProject = await getProjectByIdRepository(projectData._id);
  const update = new ProjectEntity(projectData);
  update.validateFieldsUpdate();
  const updatedBody = update.getUpdateBody(foundProject);
  const updatedProject = await updateProjectRepository(updatedBody);
  if (updatedProject._id) {
    return updatedProject;
  } else {
    throw new Error("Project not found.");
  }
};
