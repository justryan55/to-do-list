import './styles.css';
import Project from './projectConstructor.js';
import { addEventListeners } from './addEventListeners.js';
import { addProject } from './addProject.js';
import { projects } from './projectConstructor.js';



addEventListeners();

const project = new Project('Movies'); 
project.storeProject();

console.log(projects);

const project2 = new Project('Cats'); 
project2.storeProject();
console.log(projects);
