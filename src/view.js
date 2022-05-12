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
    }

    static closeForm = () => {
        event.preventDefault();
        projectModal.style.display = 'none';
        projectForm.reset();
    };
};
