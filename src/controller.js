import UI from './UI';
import Projects from './project';
import ToDoList from './todolist';

export default class controller {
  static saveTodoList = (data) => {
    localStorage.setItem('todoList', JSON.stringify(data));
  };

  static getTodoList = () => {
    const todoList = Object.assign(new ToDoList(), JSON.parse(localStorage.getItem('todoList')));
    todoList.setProjects = (todoList
      .getProjects()
      .map((project) => Object.assign(new Projects(), project)));
    return todoList;
  };

  static newProject = () => {
    const projectForm = document.getElementById('projectForm');
    const projectName = new Projects(projectForm.title.value);
    UI.closeAddForm();
    this.addProject(projectName);
    UI.createProject(projectName.getName());
  };

  static addProject = (project) => {
    const todoList = this.getTodoList();
    todoList.addProject(project);
    this.saveTodoList(todoList);
  };

  static deleteProject = (projectName) => {
    const todoList = this.getTodoList();
    todoList.deleteProject(projectName);
    this.saveTodoList(todoList);
  };

  static changeProject = (current, newProjectName) => {
    const todoList = this.getTodoList();
    todoList.editProject(current, newProjectName);
    this.saveTodoList(todoList);
  };

  static editProject = (current, newProjectName) => {
    console.log(current.textContent);
    // const sibling = current.previousElementSibling;
    UI.closeEditForm();
    const projectName = new Projects(newProjectName);
    this.addProject(projectName);
    UI.createPage(projectName.getName());
    UI.createProject(projectName.getName());
    UI.changeProject(current);
    window.location.reload();
  };
}
