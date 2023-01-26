import projects from "../../mocks/projects";

export default async function () {
  return new Promise((resolve) => {
    resolve(projects);
  });
}
