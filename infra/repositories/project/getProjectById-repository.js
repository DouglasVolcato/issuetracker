const projects = require("../../mocks/projects");

module.exports = async function (projectId) {
  return new Promise((resolve) => {
    for (let index = 0; index < projects.length; index++) {
      if (projects[index]._id === projectId) {
        resolve(projects[index]);
        break;
      }
    }
    resolve(null);
  });
};
