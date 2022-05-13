(()=>{"use strict";class t{constructor(t){this.name=t,this.tasks=[]}getName(){return this.name}}class e{constructor(){this.projects=[]}setProjects(t){this.projects=t}addProject(t){this.projects.push(t)}getProjects(){return this.projects}deleteProject=t=>{console.log(this.projects);const e=this.projects.find((e=>e.name===t));this.projects.splice(this.projects.indexOf(e),1)}}class s{static saveTodoList=t=>{localStorage.setItem("todoList",JSON.stringify(t))};static getTodoList=()=>{const s=Object.assign(new e,JSON.parse(localStorage.getItem("todoList")));return s.setProjects=s.getProjects().map((e=>Object.assign(new t,e))),s};static newProject=()=>{const e=new t(projectForm.title.value);o.closeForm(),this.addProject(e),o.createProject(e.getName()),console.log(e)};static addProject=t=>{const e=this.getTodoList();e.addProject(t),this.saveTodoList(e),console.log(e)};static deleteProject=t=>{const e=this.getTodoList();e.deleteProject(t),this.saveTodoList(e)}}class o{static pageListeners=()=>{const t=document.getElementById("openProjectForm"),e=document.getElementById("projectModal");t.addEventListener("click",(()=>e.style.display="block")),document.getElementById("closeProject").addEventListener("click",(()=>e.style.display="none")),document.getElementById("addProject").addEventListener("click",s.newProject),document.getElementById("projectList").addEventListener("click",(t=>{if(t.target.classList.contains("project"))this.createPage(t.target.textContent);else if(t.target.classList.contains("delete")){const e=t.target.nextElementSibling,o=t.target.closest(".projectContainer"),c=document.getElementById("taskList");s.deleteProject(e.textContent),o.remove(),c.innerHTML=""}}))};static loadProjects=()=>{s.getTodoList().getProjects().forEach((t=>{this.createProject(t.name),this.createPage(t.name)}))};static closeForm=()=>{event.preventDefault(),projectModal.style.display="none",projectForm.reset()};static createProject=t=>{const e=document.createElement("div"),s=document.createElement("h4"),o=document.createElement("button");o.textContent="x",s.textContent=t,e.classList.add("projectContainer"),o.classList.add("delete"),s.classList.add("project"),projectList.appendChild(e),projectList.insertBefore(e,projectModal),e.appendChild(o),e.appendChild(s)};static createPage=t=>{const e=document.getElementById("taskList");e.innerHTML="";const s=document.createElement("h2");s.textContent=t,s.classList.add("projectTitle"),e.appendChild(s)}}document.addEventListener("DOMContentLoaded",o.pageListeners),document.addEventListener("DOMContentLoaded",o.loadProjects)})();