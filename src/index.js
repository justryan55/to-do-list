import './styles.css';

class TodoList {
    constructor() {
        this.projects = [];
        this.currentProjectIndex = null;
        this.currentTodoIndex = null;
        this.$projectNameInput = document.getElementById('project-input');
        this.$header = document.getElementById("header");
        this.$projectList = document.querySelector('.dynamically-created-projects');
        this.$toDoInputField = document.getElementById("task-item");
        this.$toDoSection = document.getElementById("display-items-of-project");
        this.$projectInputToggleButton = document.getElementById('add-project');
        this.$todoItemName = document.getElementById('todo-item-name');
        this.$descriptionInput = document.getElementById('description-input');
        this.$descriptionSection = document.getElementById('description');

        this.bindEvents();
        this.render();
    }

    createProject(name) {
        const project = new Project(name);
        this.projects.push(project);

        this.currentProjectIndex = this.projects.length - 1;

        this.render();
    }

    createTodo(){
        const todoItem = new Todo(this.$toDoInputField.value);
        const currentProject = this.projects[this.currentProjectIndex];
        currentProject.storedItems.push(todoItem);
        this.$toDoInputField.value = "";
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

            this.createTodo();
            this.render();

            
        });

        this.$descriptionInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter"){
                this.render();
                // this.$descriptionInput.value = "";
            }
        })

    }

    render() {
        const currentProject = this.projects[this.currentProjectIndex];

        if(this.projects.length === 0){
            this.createProject("Home");
        }

        if(!currentProject) {
            return;
        }
        
        this.$projectList.innerHTML = "";

        this.projects.forEach((project, i) => {
            const $newProject = document.createElement('button');
            $newProject.classList.add("new-project-button");
            $newProject.innerText = project.name;

            if(currentProject === project) {
                $newProject.classList.add("project-current");
            }

            $newProject.addEventListener('click', () => {
                this.currentProjectIndex = i;
                this.render();

            });

            this.$projectList.append($newProject);
        });

        this.$header.innerHTML = currentProject.name;
        this.$toDoSection.innerHTML = "";

        currentProject.storedItems.forEach((item, j) => {
            const $toDoItemElement = document.createElement("li");
            $toDoItemElement.classList.add("to-do-item");
            $toDoItemElement.innerText = item.name;

            $toDoItemElement.addEventListener("click", () => {
                this.currentTodoIndex = j;
                this.render();
            })

            this.$toDoSection.append($toDoItemElement);
        });
        
        if (this.currentTodoIndex !== null){
                this.$todoItemName.innerHTML = currentProject.storedItems[this.currentTodoIndex].name;
        }

        if (this.currentTodoIndex !== null){
            currentProject.storedItems.forEach((item, x) => {
                const $descriptionElement = document.createElement("p");
                const currentDescriptionValue = this.$descriptionInput.value;

                $descriptionElement.innerText = currentDescriptionValue;
                const a = currentProject.storedItems[this.currentTodoIndex].description.push(currentDescriptionValue);
                // const currentTodo = currentProject.storedItems[this.currentTodoIndex];
                // currentTodo.description = currentDescriptionValue;

                $descriptionElement.addEventListener("click", () => {
                    this.render();
                })


                this.$descriptionInput.value = "";
    
                this.$descriptionSection.append($descriptionElement);

            });


            }

            // currentProject.storedItems[this.currentTodoIndex].forEach((item, x) => {
            //     const $descriptionElement = document.createElement("p");
            //     $descriptionElement.innerText = item.description;

            //     $descriptionElement.addEventListener("click", () => {
            //         this.descriptionIndex = x;
            //         console.log(x)
            //         this.render();
            //     })
            // })
    }

}

class Project{
    constructor(name){
        this.name = name;
        this.storedItems = [];
        this.currentTodoIndex = null;
    }
}

class Todo{
    constructor(name){
        this.name = name;
        this.description = [];
    }
}




const todoList = new TodoList();


// render(todoItem){
//     const currentTodoIndex = todoItem.length - 1;
//     const currentTodo = todoItem[currentTodoIndex];
//     this.$todoItemName.innerText = currentTodo.name;

// createDescription(j){
//     this.$descriptionInput.value = "";
//     this.currentTodoIndex = j;
//     const descriptionInput = this.$descriptionInput.value;
//     const currentProject = this.projects[this.currentProjectIndex];
//     const currentTodo = currentProject.storedItems[this.currentTodoIndex];
//     console.log(currentTodo);
//     currentTodo.description.push(descriptionInput);
//     console.log(currentTodo.description)
// }