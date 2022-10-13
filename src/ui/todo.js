export default class TodoElement {
  constructor(todo, callbackRemove) {
    this.todo = todo;
    this.HTML = this.createElement(callbackRemove);
  };

  createElement(callbackRemove) {
    const $todo = document.createElement('div');
    $todo.classList.add('.todo');
    $todo.textContent = this.todo.title;
    // Remove
    $todo.onclick = () => {
      callbackRemove(this.todo);
      this.removeElement();
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
