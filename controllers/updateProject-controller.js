import updateProjectService from "../services/updateProject-service";

export default async function (req, res) {
  const update = req.body;
  const updated = await updateProjectService(update);
  res.status(200).send(updated);
}
