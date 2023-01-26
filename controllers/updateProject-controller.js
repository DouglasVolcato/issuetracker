const updateProjectService = require("../services/updateProject-service");

module.exports = async function (req, res) {
  const update = req.body;
  const updated = await updateProjectService(update);
  res.status(200).send(updated);
};
