import TodoElement from './todo.js';
import ButtonElement from './button.js';

export default class ProyectElement {
  constructor(proyect, callbackRemove) {
    this.proyect = proyect;
    this.HTML = this.createElement(callbackRemove);
  };

  createElement(callbackRemove) {
    const $proyect = document.createElement('div');
    $proyect.classList.add('proyect');
    $proyect.textContent = this.proyect.name;
    // Show on click
    $proyect.onclick = () => {
      this.showTodos();
      this.showAddTodoBtn();
    };
    // Remove
    $proyect.oncontextmenu = (e) => {
      e.preventDefault();
      callbackRemove(this.proyect);
      this.removeElement();
    };
    return $proyect;
  };

  show() {
    const $allProyects = document.querySelector('.all-proyects');
    $allProyects.appendChild(this.HTML);
  };

  showAddTodoBtn() {
    const $allTodos = document.querySelector('.all-todos');
    const $button = new ButtonElement('+ TODO');
    $button.HTML.onclick = () => {
      const todoName = prompt('Ingrese el nombre del todo'); // get todo data
      if (!todoName) return;
      this.proyect.add({title:todoName});
      this.showTodos(); // Refresh
      this.showAddTodoBtn();
    };
    $allTodos.appendChild($button.HTML);
  };

  showTodos() {
    const $allTodos = document.querySelector('.all-todos');
    $allTodos.textContent = this.proyect.name;
    console.log(this.proyect.todos);
    this.proyect.todos.forEach(todo => {
      const $todo = new TodoElement(todo, this.proyect.remove.bind(this.proyect));
      $todo.show();
    });
  };

  removeElement() {
    this.HTML.remove();
  };
};
