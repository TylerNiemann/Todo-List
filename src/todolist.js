export default class ToDoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  addProject(title) {
    this.projects.push(title);
  }

  getProjects() {
    return this.projects;
  }

  deleteProject = (projectName) => {
    const projectToDelete = this.projects.find((project) => project.name === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  };
}
