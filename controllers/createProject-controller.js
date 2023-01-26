import createProjectService from "../services/createProject-service";

export default async function (req, res) {
  const project = req.body;
  const createdProject = await createProjectService(project);
  res.status(201).send(createdProject);
}
