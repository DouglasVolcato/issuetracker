import updateProjectRepository from "../infra/repositories/project/updateProject-repository";

export default async function (req, res) {
  const update = req.body;
  const updated = await updateProjectRepository(update);
  res.status(200).send(updated);
}
