import deleteProjectService from "../services/deleteProject-service";

export default async function (req, res) {
  const projectId = req.body._id;
  const createdProject = await deleteProjectService(projectId);
  res.status(200).send(createdProject);
}
