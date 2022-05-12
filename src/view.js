import Projects from "./project";

const openForms = () => {
    const openProjectForm = document.getElementById('openProjectForm');
    const projectForm = document.getElementById('projectForm');
    const projectModal = document.getElementById('projectModal');
    openProjectForm.addEventListener('click', () => projectModal.style.display = 'block');

    const closeProjectForm = document.getElementById('closeProject');
    closeProjectForm.addEventListener('click', () => projectModal.style.display = 'none');

    const addProjectBtn = document.getElementById('addProject');
    addProjectBtn.addEventListener('click', newProject);

    
};
const newProject = () => {
    const projectName = new Projects(projectForm.title.value);
    closeForm();
    console.log(projectName);
}

const closeForm = () => {
    event.preventDefault();
    projectModal.style.display = 'none';
    projectForm.reset();
}

export {openForms}