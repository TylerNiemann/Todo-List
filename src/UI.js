import controller from './controller';

export default class UI {
  static pageListeners = () => {
    const openProjectForm = document.getElementById('openProjectForm');
    openProjectForm.addEventListener('click', this.openAddForm);

    const closeProjectForm = document.getElementById('closeProject');
    closeProjectForm.addEventListener('click', this.closeAddForm);

    const closeEditProjectForm = document.getElementById('closeEditProject');
    closeEditProjectForm.addEventListener('click', this.closeEditForm);

    const addProjectBtn = document.getElementById('addProject');
    addProjectBtn.addEventListener('click', controller.newProject);

    const projectList = document.getElementById('projectList');
    projectList.addEventListener('click', (e) => {
      if (e.target.classList.contains('project')) this.createPage(e.target.textContent);
      else if (e.target.classList.contains('delete')) this.removeProject(e.target);
      else if (e.target.classList.contains('editProject')) this.editProject(e.target);
    });
  };

  static loadProjects = () => {
    controller.getTodoList().getProjects().forEach((project) => {
      this.createProject(project.name);
      this.createPage(project.name);
    });
  };

  static openAddForm() {
    const projectModal = document.getElementById('projectModal');
    projectModal.style.display = 'block';
  }

  static openEditForm() {
    const editProjectModal = document.getElementById('editProjectModal');
    editProjectModal.style.display = 'block';
  }

  static closeEditForm() {
    editProjectModal.style.display = 'none';
    editProjectForm.reset();
  }

  static closeAddForm = () => {
    event.preventDefault();
    projectModal.style.display = 'none';
    projectForm.reset();
  };

  static createProject = (name) => {
    const projectLine = document.createElement('div');
    const project = document.createElement('h4');
    const removeProject = document.createElement('button');
    const editProject = document.createElement('button');
    removeProject.textContent = 'x';
    editProject.textContent = 'Edit';
    project.textContent = name;
    projectLine.classList.add('projectContainer');
    editProject.classList.add('editProject');
    removeProject.classList.add('delete');
    project.classList.add('project');
    projectList.appendChild(projectLine);
    projectList.insertBefore(projectLine, projectModal);
    projectLine.appendChild(removeProject);
    projectLine.appendChild(project);
    projectLine.appendChild(editProject);
  };

  static createPage = (title) => {
    const pageContent = document.getElementById('taskList');
    pageContent.innerHTML = '';
    const projectTitle = document.createElement('h2');
    projectTitle.textContent = title;
    projectTitle.classList.add('projectTitle');
    pageContent.appendChild(projectTitle);
  };

  static removeProject = (current) => {
    const sibling = current.nextElementSibling;
    const parent = current.closest('.projectContainer');
    const pageContent = document.getElementById('taskList');
    controller.deleteProject(sibling.textContent);
    parent.innerHTML = '';
    parent.remove();
    pageContent.innerHTML = '';
  };

  static changeProject = (current) => {
    const parent = current.closest('.projectContainer');
    const pageContent = document.getElementById('taskList');
    parent.innerHTML = '';
    parent.remove();
    pageContent.innerHTML = '';
    controller.deleteProject(current.textContent);
  };

  static editProject = (current) => {
    this.openEditForm();
    const sibling = current.previousElementSibling;
    const editProjectForm = document.getElementById('editProjectForm');
    editProjectForm.addEventListener('submit', (e) => {
      e.preventDefault();
      controller.editProject(sibling, editProjectForm.title.value);
    });
  };
}
