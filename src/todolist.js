import Projects from "./project";

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

    deleteProject = (projectName) => {
        console.log(this.projects);
        const projectToDelete = this.projects.find((project) => project.name === projectName);
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
      }
}