import Projects from "./project";
import controller from "./controller";

 export default class View {
    static pageListeners= () => {
    const openProjectForm = document.getElementById('openProjectForm');
    const projectModal = document.getElementById('projectModal');
    openProjectForm.addEventListener('click', () => projectModal.style.display = 'block');

    const closeProjectForm = document.getElementById('closeProject');
    closeProjectForm.addEventListener('click', () => projectModal.style.display = 'none');

    const addProjectBtn = document.getElementById('addProject');
    addProjectBtn.addEventListener('click', controller.newProject);

    const projectList = document.getElementById('projectList');
    projectList.addEventListener('click', (e) => {if(e.target.classList.contains('project')) this.createPage(e.target.textContent);})};

    static closeForm = () => {
        event.preventDefault();
        projectModal.style.display = 'none';
        projectForm.reset();
    };

    static createProject = (name) => {
        const project = document.createElement('h4');
        project.textContent = name;
        project.classList.add('project');
        projectList.appendChild(project);
        projectList.insertBefore(project,projectModal);
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
