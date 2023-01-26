const projects = require("../../mocks/projects");

module.exports = async function () {
  return new Promise((resolve) => {
    resolve(projects);
  });
};
