
export const projects = [];

export default class Project {
    constructor(name){
        this.name = name;
    }

    storeProject(){
        projects.push(this.name);
    }
}


