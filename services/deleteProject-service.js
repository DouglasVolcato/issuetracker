import deleteProjectRepository from "../infra/repositories/project/deleteProject-repository";

export default async function (projectId) {
  return await deleteProjectRepository(projectId);
}
