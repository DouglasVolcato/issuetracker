import { v4 } from "uuid";

module.exports = class {
  constructor(projectData) {
    this.projectData = projectData;
  }

  validateFields() {
    if (!this.projectData.issue_title) {
      throw new Error("Missing project title.");
    }
    if (!this.projectData.issue_text) {
      throw new Error("Missing project text.");
    }
    if (!this.projectData.created_by) {
      throw new Error("Missing project author name.");
    }
    return;
  }

  getUpdateBody(oldProjectBody) {
    const currentDate = new Date().toISOString();
    return {
      _id: oldProjectBody._id,
      issue_title: this.projectData.issue_title || oldProjectBody.issue_title,
      issue_text: this.projectData.issue_text || oldProjectBody.issue_text,
      created_on: oldProjectBody.created_on,
      updated_on: currentDate,
      created_by: this.projectData.created_by || oldProjectBody.created_by,
      assigned_to: this.projectData.assigned_to || oldProjectBody.assigned_to,
      open: this.projectData.open || oldProjectBody.open,
      status_text: this.projectData.status_text || oldProjectBody.status_text,
    };
  }

  getProject() {
    const uuid = v4();
    const currentDate = new Date().toISOString();
    return {
      _id: uuid,
      issue_title: this.projectData.issue_title,
      issue_text: this.projectData.issue_text,
      created_on: currentDate,
      updated_on: currentDate,
      created_by: this.projectData.created_by,
      assigned_to: this.projectData.assigned_to || "",
      open: this.projectData.open || true,
      status_text: this.projectData.status_text || "",
    };
  }
};
