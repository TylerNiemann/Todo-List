import UI from "./UI";
import Projects from "./project";
import ToDoList from "./todolist";

export default class controller  {

    static saveTodoList = (data) => {
        localStorage.setItem('todoList', JSON.stringify(data))
      };
    
    static getTodoList = () => {
        const todoList = Object.assign(new ToDoList(),JSON.parse(localStorage.getItem('todoList')));
        todoList.setProjects = (todoList.getProjects().map((project) => Object.assign(new Projects(), project)));
        return todoList;
    };

   static newProject = () => {
        const projectName = new Projects(projectForm.title.value);
        UI.closeForm();
        this.addProject(projectName);
        UI.createProject(projectName.getName());
        console.log(projectName);
    };

    static addProject = (project) => {
        const todoList = this.getTodoList()
        todoList.addProject(project)
        this.saveTodoList(todoList)
        console.log(todoList);
    };

    static deleteProject = (projectName) => {
        const todoList = this.getTodoList()
        todoList.deleteProject(projectName)
        this.saveTodoList(todoList)
      }
};
