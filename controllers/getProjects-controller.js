import getProjectsService from "../services/getProjects-service";

export default async function (req, res) {
  const projects = await getProjectsService();
  res.status(200).send(projects);
}
