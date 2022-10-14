import TodoElement from './todo.js';
import ButtonElement from './button.js';
import Modal from './modal.js';

export default class ProyectElement {
  constructor(proyect, callbackRemove, isDefault) {
    this.proyect = proyect;
    this.HTML = this.createElement(callbackRemove, isDefault);
  };

  createElement(callbackRemove, isDefault) {
    const $proyect = document.createElement('div');
    $proyect.classList.add('proyect');
    $proyect.innerHTML = 
    `<p>${this.proyect.name}</p>
    <div class="icon icon-delete"></div>`
    // Show on click
    $proyect.onclick = () => {
      this.showDiplay()
    };
    // Remove
    $proyect.querySelector('.icon-delete').onclick = (e) => {
      this.clearDisplay();
      callbackRemove(this.proyect);
      this.removeElement();
      e.stopPropagation();
    };
    if(isDefault === true) {
      $proyect.querySelector('.icon-delete').remove();
    }
    return $proyect;
  };

  addNewTodo(todoData) {
    this.proyect.add(todoData);
    this.showDiplay();
  };

  show() {
    const $allProyects = document.querySelector('.all-proyects');
    $allProyects.appendChild(this.HTML);
  };
  clearDisplay() {
    document.querySelector('.all-todos').textContent = '';
  };
  showDiplay() {
    this.clearDisplay();
    this.showProyectName();
    this.showTodos();
    this.showAddTodoBtn();
  };
  showAddTodoBtn() {
    const $allTodos = document.querySelector('.all-todos');
    const $button = new ButtonElement('+ TODO');
    $button.HTML.onclick = () => {
      const modal = new Modal();
      modal.callbackSubmit = this.addNewTodo.bind(this);
      modal.show();
    };
    $allTodos.appendChild($button.HTML);
  };
  showTodos() {
    this.proyect.todos.forEach(todo => {
      const $todo = new TodoElement(todo, this.proyect.remove.bind(this.proyect));
      $todo.show();
    });
  };
  showProyectName() {
    const $allTodos = document.querySelector('.all-todos');
    const $title = document.createElement('h2');
    $title.textContent = this.proyect.name;
    $allTodos.appendChild($title);
  }

  removeElement() {
    this.HTML.remove();
  };
};
