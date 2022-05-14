export default class Projects {
  constructor(title) {
    this.name = title;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  editProject = (newProjectName) => {
    this.name = newProjectName;
    console.log(this.projects);
  };
}
