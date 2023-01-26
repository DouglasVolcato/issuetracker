import getProjectsRepository from "../infra/repositories/project/getProjects-repository";

export default async function (req, res) {
  const projects = await getProjectsRepository();
  res.status(200).send(projects);
}
