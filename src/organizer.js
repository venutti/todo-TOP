import Proyect from "./entities/proyect.js";
import ProyectElement from "./ui/proyect.js";
import DinamicInput from "./ui/dinamic-input.js";

export default class OrganizerElement {
  constructor() {
    this.organizer = new Set();
  }

  addNewProyect(proyectName, isDefault) {
    const newProyect = new Proyect(proyectName);
    this.organizer.add(newProyect);
    const $newProyect = new ProyectElement(
      newProyect,
      this.remove.bind(this),
      isDefault
    );
    $newProyect.show();
  }

  remove(proyect) {
    this.organizer.delete(proyect);
  }

  initialize() {
    const addProjectBtn = document.querySelector('[data-id="new-proyect"]');
    addProjectBtn.onclick = () => {
      const input = new DinamicInput();
      input.callbackSubmit = this.addNewProyect.bind(this);
      input.show();
    };
  }
}
