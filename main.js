(()=>{"use strict";class t{constructor(t){this.name=t,this.tasks=[]}getName(){return this.name}}class e{constructor(){this.projects=[]}setProjects(t){this.projects=t}addProject(t){this.projects.push(t)}getProjects(){return this.projects}}class s{static saveTodoList=t=>{localStorage.setItem("todoList",JSON.stringify(t))};static getTodoList=()=>{const s=Object.assign(new e,JSON.parse(localStorage.getItem("todoList")));return s.setProjects=s.getProjects().map((e=>Object.assign(new t,e))),s};static newProject=()=>{const e=new t(projectForm.title.value);o.closeForm(),s.addProject(e),o.createProject(e.getName()),console.log(e)};static addProject=t=>{const e=s.getTodoList();e.addProject(t),s.saveTodoList(e),console.log(e)}}class o{static pageListeners=()=>{const t=document.getElementById("openProjectForm"),e=document.getElementById("projectModal");t.addEventListener("click",(()=>e.style.display="block")),document.getElementById("closeProject").addEventListener("click",(()=>e.style.display="none")),document.getElementById("addProject").addEventListener("click",s.newProject),document.getElementById("projectList").addEventListener("click",(t=>{t.target.classList.contains("project")&&this.createPage(t.target.textContent)}))};static closeForm=()=>{event.preventDefault(),projectModal.style.display="none",projectForm.reset()};static createProject=t=>{const e=document.createElement("h4");e.textContent=t,e.classList.add("project"),projectList.appendChild(e),projectList.insertBefore(e,projectModal)};static createPage=t=>{const e=document.getElementById("taskList");e.innerHTML="";const s=document.createElement("h2");s.textContent=t,s.classList.add("projectTitle"),e.appendChild(s)}}document.addEventListener("DOMContentLoaded",o.pageListeners),document.addEventListener("DOMContentLoaded",localStorage.clear())})();