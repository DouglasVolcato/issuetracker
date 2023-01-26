const ProjectEntity = require("../domain/entities/project-entity");
const getProjectByIdRepository = require("../infra/repositories/project/getProjectById-repository");
const updateProjectRepository = require("../infra/repositories/project/updateProject-repository");

module.exports = async function (projectData) {
  const foundProject = await getProjectByIdRepository(projectData._id);
  const update = new ProjectEntity(projectData);
  const updatedBody = update.getUpdateBody(foundProject);
  return await updateProjectRepository(updatedBody);
};
