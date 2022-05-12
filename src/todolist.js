export default class ToDoList {
    constructor(){
        this.projects = [];
    }
    addProject(title){
        this.projects.push(title);
    }
    getProjects(){
        return this.projects
    }
}