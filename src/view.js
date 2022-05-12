const openForm = () => {
    let openProjectForm = document.getElementById('openProjectForm');
    let projectModal = document.getElementById('projectModal');
    openProjectForm.addEventListener('click', () => projectModal.style.display = 'block');

    let closeProjectForm = document.getElementById('closeProject');
    closeProjectForm.addEventListener('click', () => projectModal.style.display = 'none');
};

export {openForm}