import { addProject } from "./addProject.js";

export function addEventListeners(){
    const addBtn = document.getElementById('add-project');
    addBtn.addEventListener("click", addProject)
}