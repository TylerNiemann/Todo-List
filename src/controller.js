import View from "./view";
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
        View.closeForm();
        controller.addProject(projectName);
        View.createProject(projectName.getName());
        console.log(projectName);
    };

    static addProject = (project) => {
        const todoList = controller.getTodoList()
        todoList.addProject(project)
        controller.saveTodoList(todoList)
        console.log(todoList);
    };
};
