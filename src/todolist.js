export default class ToDoList {
    constructor(){
        this.projects = [];
    }

    setProjects(projects){
        this.projects = projects;
    }
    
    addProject(title){
        this.projects.push(title);
    }
    getProjects(){
        return this.projects
    }
}