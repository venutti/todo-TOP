export default class Modal {
  constructor() {
    this.todo = undefined;
    this.callbackSubmit = undefined;
    this.modal = document.querySelector('.modal');
    this.overlay = document.querySelector('.overlay');
  };
  show() {
    this.init();
    this.modal.classList.add('active');
    this.overlay.classList.add('active');
  }
  close() {
    this.modal.classList.remove('active');
    this.overlay.classList.remove('active');
  }
  submit(e) {
    e.preventDefault();
    const data = {
      title: this.modal.querySelector('#todo-title').value,
      description: this.modal.querySelector('#todo-description').value,
      dueDate: this.modal.querySelector('#todo-duedate').value,
      priority: this.modal.querySelector('input[name=priority]:checked').value,
    }
    console.log(data)
    this.callbackSubmit(data);
    this.close();
  }
  init() {
    this.modal.querySelector('form').reset();
    this.modal.querySelector('h2').textContent = 'Nueva tarea';
    this.modal.querySelector('#low-prior').checked = true;
    if (this.todo) {
      this.modal.querySelector('h2').textContent = 'Editar tarea';
      this.modal.querySelector('#todo-title').value = this.todo.title;
      this.modal.querySelector('#todo-description').value = this.todo.description;
      this.modal.querySelector('#todo-duedate').value = this.todo.dueDate;
      this.modal.querySelector(`#${this.todo.priority}`).checked = true;
    }
    this.modal.querySelector('.cancel').onclick = () => this.close();
    this.overlay.onclick = () => this.close();
    this.modal.querySelector('form').onsubmit = (e) => this.submit(e);
  }
};
