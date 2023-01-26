import ProjectEntity from "../domain/entities/project-entity";
import getProjectByIdRepository from "../infra/repositories/project/getProjectById-repository";
import updateProjectRepository from "../infra/repositories/project/updateProject-repository";

export default async function (projectData) {
  const foundProject = await getProjectByIdRepository(projectData._id);
  const update = new ProjectEntity(projectData);
  const updatedBody = update.getUpdateBody(foundProject);
  return await updateProjectRepository(updatedBody);
}
