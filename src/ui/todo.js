import Modal from "./modal.js";

export default class TodoElement {
  constructor(todo, callbackRemove) {
    this.todo = todo;
    this.HTML = this.createElement(callbackRemove);
  };

  createElement(callbackRemove) {
    const $todo = document.createElement('div');
    $todo.classList.add('todo');
    if (this.todo.isCompleted()) {
     $todo.classList.add('completed') 
    }
    $todo.innerHTML =
    `<div class="icon icon-status"></div>
    <p>${this.todo.title}</p>
    <div class="icon icon-delete"></div>`;
    // Remove todo
    $todo.querySelector('.icon-delete').onclick = () => {
      callbackRemove(this.todo);
      this.removeElement();
    };
    // Complete todo
    $todo.querySelector('.icon-status').onclick = () => {
      $todo.classList.toggle('completed');
      this.todo.toggleComplete();
    };
    //Edit todo
    $todo.querySelector('p').onclick = () => {
      const modal = new Modal();
      modal.todo = this.todo;
      modal.callbackSubmit = this.todo.edit.bind(this.todo);
      modal.show();
    };
    return $todo;
  };

  show() {
    const $allTodos = document.querySelector('.all-todos');
    $allTodos.appendChild(this.HTML);
  };

  removeElement() {
    this.HTML.remove();
  };
};
