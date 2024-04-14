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
        this.toDoInputField = document.getElementById("task-item");
        this.toDoSection = document.getElementById("display-items-of-project");
        this.header = document.getElementById("header");
    }

    renameHeaderToProject(){
        this.header.innerText = this.name;
    }

    displayToDoItems(){
        this.toDoSection.innerHTML = "";
        this.storedItems.forEach((item) => {
            const toDoItemElement = document.createElement("li");
            toDoItemElement.classList.add("to-do-item");
            toDoItemElement.innerText = item;
            this.toDoSection.appendChild(toDoItemElement);
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
    setupProjectEventListeners(newProjectObject);
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

function setupProjectEventListeners(newProjectObject){
    newProjectObject.toDoInputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter"){
            if (newProjectObject.toDoInputField.value === ""){
                return
            } else {
                const toDoItem = newProjectObject.toDoInputField.value;
                newProjectObject.storedItems.push(toDoItem);
                newProjectObject.toDoInputField.value = "";
                newProjectObject.displayToDoItems();
                console.log(newProjectObject.storedItems);    
            }
        }
    })
}

function callRenameHeaderMethodOfProject(newProjectDiv, newProjectObject){
    newProjectDiv.addEventListener("click", () => {
        newProjectObject.renameHeaderToProject();
        // callstoreItemsInProjectMethodOfProject(newProjectDiv, newProjectObject);
    })
}

// function callstoreItemsInProjectMethodOfProject(newProjectDiv, newProjectObject){
//     newProjectObject.storeItemsInProject();
// }

addEventListeners();
