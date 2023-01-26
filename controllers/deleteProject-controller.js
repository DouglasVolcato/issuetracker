import deleteProjectRepository from "../infra/repositories/project/deleteProject-repository";

export default async function (req, res) {
  const projectId = req.body._id;
  const createdProject = await deleteProjectRepository(projectId);
  res.status(200).send(createdProject);
}
