import './styles.css';

const addProjectBtn = document.getElementById('add-project');
const projectInputField = document.getElementById('project-input');
const projectList = document.querySelector('.dynamically-created-projects');
const header = document.getElementById("header");
const toDoSection = document.querySelector("display-items-of-project");
const toDoInputField = document.getElementById("task-item");
const projects = [];

class Project{
    constructor(name){
        this.name = name;
        this.storedItems = [];
    }

    renameHeaderToProject(){
        header.innerText = this.name;
    }

    storeItemsInProject(){
        const toDoItem = toDoInputField.value;
        toDoInputField.addEventListener("keypress", (event) => {
            if (event.key === "Enter"){
                this.storedItems.push(toDoItem);
                toDoInputField.value = "";
                console.log(this.storedItems)
            }
        })
        // displayToDoItemsInProject(toDoItem);
    }

    displayToDoItemsInProject(toDoItem){
        this.storedItems.forEach((item) => {
            toDoSection.innerText = item;
        })
    }
}

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
    const newProjectObject = new Project(nameOfProject);
    appendNewProjectToDOM(nameOfProject, newProjectObject);
}

function appendNewProjectToDOM(projectName, projectObject){
    if (projectInputField.value === ""){
        return
    }

    projects.push(projectObject);
    const newProjectDiv = document.createElement('button');
    newProjectDiv.classList.add("new-project-button");
    newProjectDiv.innerText = projectName;    
    projectList.insertBefore(newProjectDiv, projectList.firstChild);
    projectInputField.value = "";
    callRenameHeaderMethodOfProject(newProjectDiv, projectObject);
}

function callRenameHeaderMethodOfProject(newProjectDiv, newProjectObject){
    newProjectDiv.addEventListener("click", () => {
        newProjectObject.renameHeaderToProject();
        callstoreItemsInProjectMethodOfProject(newProjectDiv, newProjectObject);
    })
}

function callstoreItemsInProjectMethodOfProject(newProjectDiv, newProjectObject){
    newProjectObject.storeItemsInProject();
}

addEventListeners();
