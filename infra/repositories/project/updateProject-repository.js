import projects from "../../mocks/projects";

export default async function (project) {
  return new Promise((resolve) => {
    for (let index = 0; index < projects.length; index++) {
      if (projects[index]._id === project._id) {
        projects[index] = project;
        resolve(project);
        break;
      }
      resolve(null);
    }
  });
}
