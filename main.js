(()=>{"use strict";class t{constructor(t){this.name=t,this.tasks=[]}getName(){return this.name}}class e{constructor(){this.projects=[]}setProjects(t){this.projects=t}addProject(t){this.projects.push(t)}getProjects(){return this.projects}}class s{static saveTodoList(t){localStorage.setItem("todoList",JSON.stringify(t))}static getTodoList(){const s=Object.assign(new e,JSON.parse(localStorage.getItem("todoList")));return s.setProjects(s.getProjects().map((e=>Object.assign(new t,e)))),s}static newProject=()=>{const e=new t(projectForm.title.value);o.closeForm(),s.addProject(e),console.log(e)};static addProject(t){const e=s.getTodoList();e.addProject(t),s.saveTodoList(e),console.log(e)}}class o{static pageListeners=()=>{const t=document.getElementById("openProjectForm"),e=document.getElementById("projectModal");t.addEventListener("click",(()=>e.style.display="block")),document.getElementById("closeProject").addEventListener("click",(()=>e.style.display="none")),document.getElementById("addProject").addEventListener("click",s.newProject)};static closeForm=()=>{event.preventDefault(),projectModal.style.display="none",projectForm.reset()}}document.addEventListener("DOMContentLoaded",o.pageListeners),document.addEventListener("DOMContentLoaded",localStorage.clear())})();