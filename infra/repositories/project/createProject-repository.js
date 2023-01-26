const projects = require("../../mocks/projects");

module.exports = async function (project) {
  return new Promise((resolve) => {
    projects.push(project);
    resolve(project);
  });
};
