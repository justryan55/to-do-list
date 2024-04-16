import './styles.css';

class TodoList {
    constructor() {
        this.projects = [];
        this.currentProjectIndex = null;
        this.$projectNameInput = document.getElementById('project-input');
        this.$header = document.getElementById("header");
        this.$projectList = document.querySelector('.dynamically-created-projects');
        this.$toDoInputField = document.getElementById("task-item");
        this.$toDoSection = document.getElementById("display-items-of-project");
        this.$projectInputToggleButton = document.getElementById('add-project');
        this.createProject("Home");

        this.bindEvents();
        this.render();
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project);

        this.currentProjectIndex = this.projects.length - 1;

        this.render();
    }
    
    bindEvents() {
        this.$projectInputToggleButton.addEventListener("click", () => {
            this.$projectNameInput.classList.toggle("hidden");
        });

        this.$projectNameInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                this.createProject(this.$projectNameInput.value);
                this.$projectNameInput.value = "";
                this.$projectNameInput.classList.toggle("hidden");
            }
        });

        this.$toDoInputField.addEventListener("keypress", (event) => {
            if (event.key !== "Enter"){
                return;
            }
            
            if (this.$toDoInputField.value === ""){
                return;
            }

            const toDoItemText = this.$toDoInputField.value;

            const project = this.projects[this.currentProjectIndex];
            project.storedItems.push(toDoItemText);
            this.$toDoInputField.value = "";

            this.render();
        });

    }

    render() {
        const currentProject = this.projects[this.currentProjectIndex];

        if(!currentProject) {
            return;
        }
        
        this.$projectList.innerHTML = "";
        this.projects.forEach(project => {
            const $newProject = document.createElement('button');
            $newProject.classList.add("new-project-button");
            $newProject.innerText = project.name;

            if(currentProject === project) {
                $newProject.classList.add("project-current");
            }

            $newProject.addEventListener('click', () => {
                this.currentProjectIndex = this.projects.indexOf(project);
                this.render();
            });

            this.$projectList.append($newProject);
        });

        this.$header.innerHTML = currentProject.name;

        this.$toDoSection.innerHTML = "";
        currentProject.storedItems.forEach(item => {
            const $toDoItemElement = document.createElement("li");
            $toDoItemElement.classList.add("to-do-item");
            $toDoItemElement.innerText = item;
            this.$toDoSection.append($toDoItemElement);
        });
    }
}

class Project{
    constructor(name){
        this.name = name;
        this.storedItems = [];
    }
}

const todoList = new TodoList();