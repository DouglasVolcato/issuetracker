import createProjectRepository from "../infra/repositories/project/createProject-repository";

export default async function (req, res) {
  const project = req.body;
  const createdProject = await createProjectRepository(project);
  res.status(201).send(createdProject);
}
