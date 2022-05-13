import Projects from "./project";
import controller from "./controller";

 export default class UI {
    static pageListeners = () => {
        const openProjectForm = document.getElementById('openProjectForm');
        const projectModal = document.getElementById('projectModal');
        openProjectForm.addEventListener('click', () => projectModal.style.display = 'block');

        const closeProjectForm = document.getElementById('closeProject');
        closeProjectForm.addEventListener('click', () => projectModal.style.display = 'none');

        const addProjectBtn = document.getElementById('addProject');
        addProjectBtn.addEventListener('click', controller.newProject);

        const projectList = document.getElementById('projectList');
        projectList.addEventListener('click', (e) => {
            if(e.target.classList.contains('project'))this.createPage(e.target.textContent);
            else if(e.target.classList.contains('delete')){
                const sibling = e.target.nextElementSibling;
                const parent = e.target.closest('.projectContainer');
                const pageContent = document.getElementById('taskList');
                controller.deleteProject(sibling.textContent);
                parent.remove();
                pageContent.innerHTML = "";
            }
        });
    };

    static loadProjects = () => {
        controller.getTodoList().getProjects().forEach((project) => {
            this.createProject(project.name);
            this.createPage(project.name);
        }) 
    };

    static closeForm = () => {
        event.preventDefault();
        projectModal.style.display = 'none';
        projectForm.reset();
    };

    static createProject = (name) => {
        const projectLine = document.createElement('div');
        const project = document.createElement('h4');
        const removeProject = document.createElement('button');
        removeProject.textContent = 'x';
        project.textContent = name;
        projectLine.classList.add('projectContainer');
        removeProject.classList.add('delete');
        project.classList.add('project');
        projectList.appendChild(projectLine);
        projectList.insertBefore(projectLine,projectModal);
        projectLine.appendChild(removeProject);
        projectLine.appendChild(project);
    }

    static createPage = (title) => {
        const pageContent = document.getElementById('taskList');
        pageContent.innerHTML = "";
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = title;
        projectTitle.classList.add('projectTitle');
        pageContent.appendChild(projectTitle);
    }
};
