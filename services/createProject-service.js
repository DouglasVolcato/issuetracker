import ProjectEntity from "../domain/entities/project-entity";
import createProjectRepository from "../infra/repositories/project/createProject-repository";

export default async function (project) {
  const newProject = new ProjectEntity(project);
  newProject.validateFields();
  return await createProjectRepository(newProject.getProject());
}
