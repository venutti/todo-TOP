import Proyect from './entities/proyect.js';
import ProyectElement from './ui/proyect.js';

export default class OrganizerElement {
  constructor() {
    this.organizer = new Set();
  };

  addNewProyect(proyectName) {
    const newProyect = new Proyect(proyectName);
    this.organizer.add(newProyect); // add to proyectList
    const $newProyect = new ProyectElement(newProyect, this.remove.bind(this));
    $newProyect.show();
  };

  remove(proyect) {
    this.organizer.delete(proyect);
  };

  initialize() {
    const addProjectBtn = document.querySelector('[data-id="new-proyect"]');
    addProjectBtn.onclick = () => {
      const proyectName = prompt('Ingrese el nombre del proyecto'); // get proyect data
      if (!proyectName) return;
      this.addNewProyect(proyectName)
    };
  };
};
