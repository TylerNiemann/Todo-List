export default class Projects {
  constructor(title) {
    this.name = title;
    this.tasks = [];
  }

  getName() {
    return this.name;
  }
}
