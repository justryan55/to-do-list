import './styles.css';
import { addEventListeners } from './DOM.js';
import { addProjectToDOM } from './DOM.js';
import Project from './projects.js';
import { projects } from './projects.js';
import { addProjectNameToHeader } from './DOM.js';


addEventListeners();
addProjectNameToHeader("Home");

const project = new Project('Movies'); 
project.storeProject();

console.log(projects);

const project2 = new Project('Cats'); 
project2.storeProject();
console.log(projects);

