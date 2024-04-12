export const projects = [];

export default class Project {
    constructor(name){
        this.name = name;
    }

    storeProject(){
        projects.push(this.name);
    }

    addProjectNameToHeader(){

    }

}



const project = new Project('Movies'); 
project.storeProject();
project.addProjectNameToHeader();



console.log(project);

const project2 = new Project('Cats'); 
project2.storeProject();

console.log(project2);

