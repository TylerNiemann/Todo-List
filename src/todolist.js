export default class ToDoList {
  constructor() {
    this.projects = [];
  }

  setProjects(projects) {
    this.projects = projects;
  }

  setName(name) {
    this.name = name;
  }

  addProject(title) {
    this.projects.push(title);
    console.log(this.projects);
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }

  deleteProject = (projectName) => {
    const projectToDelete = this.projects.find((project) => project.name === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  };

  editProject = (projectName, newProjectName) => {
    console.log(projectName);
    console.log(newProjectName);
    let oldName = this.getProject(projectName);
    oldName = newProjectName;
    console.log(this.projects);
  };
}
