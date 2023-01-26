const updateProjectService = require("../services/updateProject-service");

module.exports = async function (req, res) {
  try {
    const update = req.body;
    const updated = await updateProjectService(update);
    res.status(200).send(updated);
  } catch (error) {
    res.status(401).send({ error: error });
  }
};
