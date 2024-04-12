

export function addEventListeners(){
   const addBtn = document.getElementById('add-project');
   addBtn.addEventListener("click", addProjectToDOM);
}


let isInputFieldBeingEdited = false;
let projectName = "";

export function addProjectToDOM(){
   const projectArea = document.querySelector('.dynamically-created-projects');
   let input = document.createElement("input");
   input.classList.add("input-field");
   input.type = "text";


    if (!isInputFieldBeingEdited){
        isInputFieldBeingEdited = !isInputFieldBeingEdited;
        projectArea.appendChild(input);
        input.addEventListener('change', function(){
            const newProjectBtn = document.createElement('button');
            newProjectBtn.classList.add("new-project-button");
            newProjectBtn.innerText = input.value;
            projectName = newProjectBtn.innerText;
            addProjectNameToHeader(projectName)
            projectArea.replaceChild(newProjectBtn, input);
        });
    } else {
        isInputFieldBeingEdited = !isInputFieldBeingEdited;
    } 
}

export function addProjectNameToHeader(projectName){
    const projectHeader = document.getElementById('header');
    projectHeader.classList.add("project-header");
    projectHeader.innerText = `${projectName}`;
}
