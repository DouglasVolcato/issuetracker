import projects from "../../mocks/projects";

export default async function (project) {
  return new Promise((resolve) => {
    projects.push(project);
    resolve(project);
  });
}
