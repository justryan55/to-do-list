import './styles.css';

const addProjectBtn = document.getElementById('add-project');
const projectInputField = document.getElementById('project-input');
const projectList = document.querySelector('.dynamically-created-projects');
const header = document.getElementById("header");
const projects = [];

function addEventListeners(){
    addProjectBtn.addEventListener("click", toggleInputField);
    projectInputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            createProject(); 
            projectInputField.classList.toggle("hidden");
        }
    });
}

function toggleInputField(){
    projectInputField.classList.toggle("hidden");
    createProject();
}

function createProject(){
    const nameOfProject = projectInputField.value;
    const newProject = new Project(nameOfProject);
    appendNewProjectToDOM(nameOfProject, newProject);
}

function appendNewProjectToDOM(projectName, projectObject){
    if (projectInputField.value === ""){
        return
    }

    projects.push(projectObject);
    const newDiv = document.createElement('button');
    newDiv.classList.add("new-project-button");
    newDiv.innerText = projectName;    
    projectList.insertBefore(newDiv, projectList.firstChild);
    projectInputField.value = "";
}

class Project{
    constructor(name){
        this.name = name;
        this.storedItems = [];
    }

    renameHeaderToProject(){
        header.innerText = this.name;
    }

    storeItemsInArray(item){
        this.storedItems.push(item);
    }

    displayText(){
        console.log("Test");
    }
}

addEventListeners()
